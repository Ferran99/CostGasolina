var app = new Vue({
    el: '#app',
    data: {
        total: '',
        kmTot: '',
        preuG: '',
        consum: '',
        peatges: [{
            nom: '',
            cops: 1,
            preu: ''
        }],
        isPeatge: false
    },
    methods: {
        calcularResultat() {
           
            this.total = (this.kmTot*(this.consum /100))*this.preuG
            this.total = this.total.toFixed(2)
            let i = 0
            let preuPeatges = 0
            while (this.peatges.length != i) {
                preuPeatges = preuPeatges + this.peatges[i].preu * this.peatges[i].cops
                i++
            }
            this.total = ((this.total *1) + (preuPeatges * 1)).toFixed(2)
        },
        addPeatge () {
            this.isPeatge = true
            this.peatges.push( {
                nom: '',
                cops: 1,
                preu: ''
            })
        },
        eliminar (index) {
            
            this.peatges.splice(index, 1)

            if (this.peatges.length < 1) this.isPeatge = false
        }

    },
    mounted: function () {
       this.eliminar(0)
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
                            <h3 for="formGroupExampleInput2">Preu benzina (€/l)</h3>
                            <input type="number" class="form-control" id="formGroupExampleInput2" placeholder="1.4" v-model="preuG">
                        </div>
                        <div class="form-group">
                        <h3 for="formGroupExampleInput3">Consum de benzina (l/100Km)</h3>
                        <input type="number" class="form-control" id="formGroupExampleInput3" placeholder="2.1" v-model="consum">
                    </div>
                    <div  v-if="isPeatge"  class="form-group">
                        <h3>Peatges</h3>
                        <div v-for="(peatge, index) in peatges" :key="peatge.id" class="card">
                            <div class="card-body">
                                <div class="form-group">
                                    <h4>Nom Peatge: </h4>
                                    <input type="text" class="form-control" v-model="peatge.nom">
                                </div>
                                <div class="form-group"> Cops que has passtat pel peatge:
                                    <select  class="form-control" v-model= "peatge.cops"  >
                                        <option  value="1">1</option>
                                        <option  value="2">2</option>
                                        <option  value="3">3</option>
                                        <option  value="4">4</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    Preu del peatge:
                                    <input type="number" class="form-control" v-model="peatge.preu">
                                </div>
                                <button type="button" v-on:click="eliminar(index)" class="btn btn-danger">Eliminar</button>
                                </div>
                        </div>
                  </div>
                    <button type="button" v-on:click="calcularResultat" class="btn btn-warning">Calcular</button>
                    <button type="button" v-on:click="addPeatge" class="btn btn-success">Afegir peatge</button>
                    </form><br>
                    <p><b>Resultat: </b><label>{{total}}€</label> </p>
                </div>
                `
})
