import * as z from 'zod';

export const password = (message?: string): z.ZodString =>
  z.string().nonempty({ message: message || 'Enter your password!' });

export const newPassword = (message?: string): z.ZodString =>
  z.string().nonempty({ message: message || 'Enter a password!' });

export const confirmPassword = (message?: string): z.ZodString =>
  z.string().nonempty({ message: message || 'Confirm your password!' });

type CreatePasswordMessages = {
  password?: string;
  confirmPassword?: string;
  match?: string;
};

export const createPassword = (
  messages?: CreatePasswordMessages,
): z.ZodObject<any> =>
  z
    .object({
      password: newPassword(messages?.password),
      confirmPassword: confirmPassword(messages?.confirmPassword),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: messages?.match || 'Passwords must match!',
      path: ['confirmPassword'],
    });

export const name = (message?: string): z.ZodString =>
  z.string().nonempty({ message: message || 'Enter your name!' });

export const email = (message?: string): z.ZodString =>
  z.string().email({ message: message || 'Enter a valid email address!' });

export const emailOptional = (
  message?: string,
): z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodUndefined]>, z.ZodLiteral<''>]> =>
  email(message).optional().or(z.literal(''));
