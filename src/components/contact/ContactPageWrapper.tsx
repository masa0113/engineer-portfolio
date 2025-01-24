"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    name: z.string().min(2, { message: "名前は2文字以上必要です" }),
    email: z.string().email({ message: "有効なメールアドレスを入力してください" }),
    message: z.string().min(10, { message: "メッセージは10文字以上必要です" })
})

export default function ContactPage() {
    //   const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        try {
            // Implement actual submission logic
            await new Promise(resolve => setTimeout(resolve, 1500))
            // toast({
            //     title: "送信成功",
            //     description: "メッセージが送信されました",
            // })
            form.reset()
        } catch (error) {
            // toast({
            //     title: "エラー",
            //     description: "送信に失敗しました",
            //     variant: "destructive",
            // })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8 max-w-md"
        >
            <h1 className="text-4xl font-bold text-center mb-12">お問い合わせ</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>お名前</FormLabel>
                                <FormControl>
                                    <Input placeholder="お名前を入力" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>メールアドレス</FormLabel>
                                <FormControl>
                                    <Input placeholder="メールアドレスを入力" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>メッセージ</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="メッセージを入力"
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? '送信中...' : '送信'}
                    </Button>
                </form>
            </Form>
        </motion.div>
    )
}