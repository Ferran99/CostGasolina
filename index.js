var app = new Vue({
    el: '#app',
    data: {
        total: '',
        kmTot: Number,
        preuG: Number,
        consum: Number
    },
    methods: {
        calcularResultat() {
           
            this.total = (this.kmTot*(this.consum /100))*this.preuG
            this.total = this.total.toFixed(2)
        }

    },
    template: `
                <div class="container"><br>
                <h1>Calcula el cost del trajecte </h1><br>
                    <form>
                        <div class="form-group">
                            <h3 for="formGroupExampleInput">Km fets</h3>
                            <input type="number" class="form-control" id="formGroupExampleInput" placeholder="100" v-model="kmTot">
                        </div>
                        <div class="form-group">
                            <h3 for="formGroupExampleInput2">Preu Gasolina (€/l)</h3>
                            <input type="number" class="form-control" id="formGroupExampleInput2" placeholder="1.4" v-model="preuG">
                        </div>
                        <div class="form-group">
                        <h3 for="formGroupExampleInput3">Consum de gasolina (l/100Km)</h3>
                        <input type="number" class="form-control" id="formGroupExampleInput3" placeholder="2.1" v-model="consum">
                    </div>
                    <button type="button" v-on:click="calcularResultat" class="btn btn-warning">Calcular</button>
                    </form><br>
                    <p><b>Resultat: </b><label>{{total}}€</label> </p>
                </div>
                `
})
