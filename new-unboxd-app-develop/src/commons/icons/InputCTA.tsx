import React from 'react';

export interface CTAProps {
  show: boolean;
}

export function PasswordCTA({ show }: CTAProps) {
  <span>{show ? 'Hide' : 'Show'}</span>;
}
