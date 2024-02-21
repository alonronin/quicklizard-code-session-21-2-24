'use client';

import { Button, ButtonProps } from '@apps/components';
import { useFormStatus } from 'react-dom';

export function SubmitButton({ type, disabled, ...props }: ButtonProps) {
  const { pending } = useFormStatus();

  return <Button type="submit" disabled={pending} {...props} />;
}
