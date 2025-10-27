import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

type _LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function LoginForm({ status, canResetPassword } : LoginProps) {

    const { data, setData, post, processing, errors, reset } = useForm<Required<_LoginForm>>({
            email: '',
            password: '',
            remember: false,
    });


    const submit: FormEventHandler = (e) => {
            e.preventDefault();
            post(route('login'), {
                onFinish: () => reset('password'),
            });
        };

    return (

        <div className="section login-wrapper">
            <div className="container">
                <div className="login-container">
                    <h1 className="font-semibold text-3xl text-center">Login to your account</h1>
                    <p className="text-center">Please enter your details below</p>

                    <form 
                        className="flex flex-col gap-6" 
                        onSubmit={submit}
                    >

                    <div className="mb-5">
                        <Label>Email</Label>
                        <Input 
                            type="email"
                            value={ data.email }
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder='Email'
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="mb-8">
                        <Label>Password</Label>
                        {canResetPassword && (
                            <TextLink href={route('password.request')} className="ml-auto text-sm" tabIndex={5}>
                            Forgot password?
                            </TextLink>)}
                        <Input 
                            type="password"
                            value={ data.password }
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Password"
                        />
                        <InputError message={errors.password} />
                    </div>
                    <Button 
                        type="submit"
                        className="display-block login-button"
                        disabled={processing}
                    >
                        Login
                    </Button>

                    </form>

                    {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}

                </div>
                
            </div>
        </div>

    )

}