<template>
  <form class="formulario-registro">

    <div class="grupo-campo">
      <label class="label-laranja">DEPARTAMENTO DE DESTINO</label>
      <input type="text" class="form-control" value="Laboratório de Preparação">
      <span class="aviso-campo text-muted">Máximo de 25 caracteres</span>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja">RESPONSÁVEL</label>
      <input type="text" class="form-control" placeholder="Nome do responsável">
    </div>

    <div class="grupo-campo">
      <label class="label-laranja">PRIORIDADE</label>
      <div class="grupo-radio">
        <input type="radio" id="normal" name="prioridade" checked>
        <label for="normal" class="text-dark">Normal</label>

        <input type="radio" id="urgente" name="prioridade">
        <label for="urgente" class="text-dark">Urgente</label>
      </div>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja">OBSERVAÇÕES PARA O DESTINATÁRIO</label>
      <textarea class="form-control"
        placeholder="Instruções adicionais ou detalhes técnicos específicos do encaminhamento..."></textarea>
    </div>

    <div class="grupo-checkbox">
      <input type="checkbox" id="manter-informado" class="form-check-input" checked>
      <label for="manter-informado" class="form-check-label text-muted">Manter-me informado sobre atualizações</label>
    </div>

    <div class="grupo-botoes">
      <button type="button" class="btn btn-cancelar-laranja">CANCELAR</button>
      <button type="button" class="btn btn-confirmar-laranja">CONFIRMAR ENCAMINHAMENTO</button>
    </div>

  </form>
</template>
<style scoped>
/* ESTILOS EXCLUSIVOS DO FORMULÁRIO DE ENCAMINHAMENTO */
.formulario-registro {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 24px;
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

.grupo-campo input[type="text"],
.grupo-campo textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #B53C02;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  background-color: #ffffff;
}

.aviso-campo {
  font-size: 12px;
  color: #8c8c8c;
  margin-top: 2px;
}

.grupo-campo textarea {
  height: 120px;
  resize: vertical;
}

/* Seleção de Prioridade (Botões de Rádio) */
.grupo-radio {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
}

.grupo-radio input[type="radio"] {
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #B53C02;
}

.grupo-radio label {
  font-size: 14px;
  font-weight: 500;
  margin-right: 24px;
  cursor: pointer;
}

/* Checkbox */
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

/* Botões de Ação */
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
