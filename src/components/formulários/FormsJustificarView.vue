<template>

  <form class="formulario-registro">

    <div class="grupo-campo">
      <label class="label-laranja">MOTIVO DA NÃO INCORPORAÇÃO</label>
      <select class="form-select">
        <option>Duplicidade no acervo</option>
        <option>Estado de conservação inadequado</option>
        <option>Fora do escopo da coleção</option>
      </select>
    </div>

    <div class="grupo-campo">
      <label class="label-laranja">JUSTIFICATIVA DETALHADA *</label>
      <textarea class="form-control"
        placeholder="Digite detalhadamente os motivos científicos ou técnicos..."></textarea>
    </div>

    <div class="grupo-checkbox">
      <input type="checkbox" id="notificar-doador" class="form-check-input" checked>
      <label for="notificar-doador" class="form-check-label text-muted">Notificar doador por e-mail automaticamente?
        (Recomendado)</label>
    </div>
    <p class="aviso-checkbox text-muted">O doador receberá uma notificação formal via e-mail com a justificativa técnica
      informada neste parecer.</p>

    <div class="grupo-botoes">
      <button type="button" class="btn btn-cancelar-laranja">CANCELAR</button>
      <button type="button" class="btn btn-confirmar-laranja">CONFIRMAR NÃO INCORPORAÇÃO</button>
    </div>

  </form>
</template>
<style scoped>
/* ESTILOS EXCLUSIVOS DO FORMULÁRIO DE JUSTIFICATIVA */
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

.grupo-campo textarea {
  height: 120px;
  resize: vertical;
}

/* Checkbox padrão */
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

.aviso-checkbox {
  font-size: 13px;
  margin-top: -16px;
  margin-left: 30px;
  line-height: 1.2;
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
