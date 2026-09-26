<template>
    <div class="containerBorda">
        <div class="d-flex justify-content-between   espacamento">
            <div>
                <img class="imgLogoPrincipal"
                    src="https://g1.globo.com/ciencia/noticia/2025/06/15/a-nova-especie-de-dinossauro-que-reescreve-historia-da-evolucao-do-tiranossauro-rex.ghtml"
                    alt="LogoPrincipal">
            </div>
            <div>
                <p>Painel do Curador > Solicitação #000012 > Aprovar</p>
                
                </div>
            <div class="curador d-flex">
                <p>Curador: {{ nomecurador }}</p>
                <i class="ri-notification-3-line"></i>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            nomecurador: 'Maria fernanda',
        }
    },
    methods: {
        // getNameCurador() {
        //     this.nomecurador = Nome-da-service.getNameCurador();
        // }
    }
}
</script>

<style scoped>
@import url('https://googleapis.com');
img {
    width: 100px;
    height: 100px;
    margin-left: 58px;
    margin-top: 8px;
}

.curador {
    color: black;
    font-size: 12px;
    gap: 10px;
    margin-top: 8px;
}

.espacamento {
    margin: 0 60px 0 0;
}

.containerBorda {
    border-bottom: 1px solid black;
}
</style>