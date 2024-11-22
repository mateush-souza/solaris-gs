"use client"
import React from 'react'
import FormBase from '@/app/components/Helper/FormBase';


const page = () => {
  const handleLogin = (formData: Record<string, string>) => {
    console.log("Login data:", formData);
    // Fazer requisição para a API
  };
  return (
    <FormBase
    title="Seja bem vindo ao Solaris!"
    description="Aqui sua iniciativa mostra na prática seus ganhos."
    fields={[
      { name: "email", label: "Email:", type: "email" },
      { name: "password", label: "Senha:", type: "password" },
    ]}
    buttonText="Entrar"
    onSubmit={handleLogin}
    footerLink={{ text: "Fazer Cadastro", href: "/cadastro" }}
  />
  )
}

export default page
