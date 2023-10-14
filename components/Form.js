import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { string, z } from "zod";

export default function Form() {
    const schema = z.object({
        fullname: string().min(1, { message: "Name is required" }),
        email: string().email({ message: "Email is invalid" }),
        message: string().min(1, { message: "Please enter a message" }).trim(),
    });


    const { register, handleSubmit, formState, setValue, getValues } = useForm({
        resolver: zodResolver(schema),
    });

    const { errors } = formState;

    let [confirmationMessage, setConfirm] = useState("");


    const handleSave = async (formValues) => {
        try {
            const res = await fetch('/api/contactAPI', {
                method: 'POST',
                body: JSON.stringify({
                    name: getValues("fullname"), email: getValues("email"), message: getValues("message"),
                }),
                headers: {
                    'content-type': 'applications/json',
                }
            })
        } catch (err) {
            console.error('Err', err);
        }
        setConfirm("Thanks for submitting! I will get back to you shortly.");
        setValue("fullname", "");
        setValue("email", "");
        setValue("message", "");
    }

    const handleInvalid = () => {
        setConfirm("Please recheck your inputs before submitting again.");
    }

    return (
        <div>
            <form name="contact" method="POST" onSubmit={handleSubmit(handleSave, handleInvalid)} >
                <input type="hidden" name="form-name" value="contact" />
                <div className="top-form-buttons">
                    <div className="name-textbox">
                        <label htmlFor="fullname">Name</label>
                        <input id="fullname" name="fullname" type="text" className="input-name form-c" {...register('fullname')} />
                        <div>{errors.fullname?.message}</div>
                    </div>
                    <div className="email-textbox">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" name="email" type="text" className="input-email form-c"  {...register('email')} />
                        <div>{errors.email?.message}</div>
                    </div>
                </div>
                <div className="submit-show">
                    <div className="message-textbox">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" type="text" className="form-c" rows="5" {...register('message')} />
                        <div>{errors.message?.message}</div>
                    </div>
                    <button type="submit" className="button submit-button">Submit</button>
                </div>
                <div>{confirmationMessage}</div>
            </form>
        </div>
    )
}

