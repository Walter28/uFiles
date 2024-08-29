"use client"

import React, { useState } from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@/schemas'
import { BluetoothConnectedIcon, Loader2 } from 'lucide-react'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'


const LoginForm = () => {

    const [ isGoogleLoading, setIsGoogleLoading ] = useState(false)
    const [ isGithubLoading, setIsGithubLoading ] = useState(false)

    const [showPassword, setShowPassword] = useState(true); // State to manage password visibility

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })

    //l'etat de notre formulaire lorsqu'il sera soumis
    const isPending = form.formState.isSubmitting

    const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
        console.log(data)
    }

    const onClick = async (provider: 'google' | 'github') => {
        console.log(provider)
    }


  return (
    <Card className='max-w-sm w-full'>
        <CardHeader>
            <CardTitle className='text-2xl'>
                Sign In
            </CardTitle>
            <CardDescription>
                Please enter your email address to sign in
            </CardDescription>
            
            <CardContent className='space-y-4 p-0'>
                <Form {...form}>
                    
                    <form 
                        className='space-y-6'
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <FormField
                            name='email'
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} 
                                            id='email' 
                                            type='email' 
                                            placeholder='email'
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            name='password'
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} 
                                            id='password' 
                                            type={ showPassword ? 'text' : 'password' }
                                            placeholder='password'
                                            disabled={isPending}

                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button className='w-full'>
                            {
                                isPending ? <Loader2  className='w-5 h-5 animate-spin'/> : 'Sign in with email'
                            }
                        </Button>
                    </form>

                    <div className="w-full flex items-center space-x-2">
                        <div className='h-[1px] w-full border'/>
                        <span className='flex-1'>or</span>
                        <div className='h-[1px] w-full border'/>
                    </div>

                    <Button
                        variant='outline'
                        className='w-full space-x-2 flex'
                        onClick= {() => {
                            setIsGoogleLoading(true)
                            onClick('google')
                        }}
                        disabled={isPending}
                    >
                        {
                            isGoogleLoading ? 
                            <Loader2 className='w-5 h-5 animate-spin' /> : 

                            <>
                                <FcGoogle className='w-5 h-5' />
                                <span>Sign in with Google</span>
                            </>
                        }
                    </Button>

                    <Button
                        variant='outline'
                        className='w-full space-x-2 flex'
                        onClick= {() => {
                            setIsGithubLoading(true)
                            onClick('github')
                        }}
                        disabled={isPending}
                    >
                        {
                            isGithubLoading ? 
                            <Loader2 className='w-5 h-5 animate-spin' /> : 

                            <>
                                <FaGithub className='w-5 h-5' />
                                <span>Sign in with Github</span>
                            </>
                        }
                    </Button>
                </Form>
            </CardContent>
        </CardHeader>
    </Card>
  )
}

export default LoginForm