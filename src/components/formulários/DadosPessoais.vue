<template>
  <form class="formulario-registro">

    <div class="grupo-campo">
      <label class="label-laranja">Nome Completo</label>
      <input type="text" class="form-control" placeholder="Digite seu nome ">
    </div>


    <div class="grupo-campo">
      <label class="label-laranja">CPF</label>
      <input type="text" class="form-control" placeholder="Ex: 123.456.789-0">    </div>

<div class="grupo-campo">
      <label class="label-laranja">E-mail</label>
      <input type="email" class="form-control" placeholder="Ex: exemplo@dominio.com">
    </div>


    <div class="grupo-campo">
      <label class="label-laranja">Telefone</label>
      <input type="text" class="form-control" placeholder="Ex: (11) 99999-9999">
    </div>

    <div class="grupo-campo">
      <label class="label-laranja">Endereço</label>
      <textarea class="form-control"
        placeholder="Ex: Rua Exemplo, 123 - São Paulo/SP"></textarea>
    </div>


    <div class="grupo-botoes">
      <button type="button" class="btn btn-cancelar-laranja">VOLTAR</button>
      <button type="button" class="btn btn-confirmar-laranja">PRÓXIMO</button>
    </div>

  </form>
</template>
<style scoped>
.formulario-registro {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color:#943101;
}

.grupo-campo {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label-laranja {
  font-size: 11px;
  font-weight: bold;
  color: #B53C02;
  letter-spacing: 0.5px;
}

.grupo-campo input,
.grupo-campo select,
.grupo-campo textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #B53C02;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  background-color: #ffffff;
}

.grupo-campo input::placeholder,
.grupo-campo textarea::placeholder {
  color: #cccccc;
}

.grupo-campo textarea {
  height: 120px;
  resize: vertical;
}

.grupo-checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
}

.form-check-input {
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin: 0;
  border: 1px solid #B53C02;
}

.form-check-label {
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
}

.grupo-botoes {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 16px;
}

.btn-cancelar-laranja {
  background-color: transparent;
  border: 1px solid #B53C02;
  color: #B53C02;
  padding: 12px 24px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
}

.btn-cancelar-laranja:hover {
  background-color: #FFF5F0;
}

.btn-confirmar-laranja {
  background-color: #B53C02;
  border: 1px solid #B53C02;
  color: #ffffff;
  padding: 12px 24px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
}

.btn-confirmar-laranja:hover {
  background-color: #943101;
  border-color: #943101;
}
</style>
