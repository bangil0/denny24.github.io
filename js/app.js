// API
const proxy = 'https://cors-anywhere.herokuapp.com/'
const ID = 'https://api.kawalcorona.com/indonesia'
const PROV = 'https://api.kawalcorona.com/indonesia/provinsi'
const NEGARA = 'https://api.kawalcorona.com'
// const POSITIF = 'https://api.kawalcorona.com/positif'
// const SEMBUH = 'https://api.kawalcorona.com/sembuh'
// const MENINGGAL = 'https://api.kawalcorona.com/meninggal'


// INdonesia DOM
const rowsID = document.querySelector('.rowsID')
const rowsProv = document.querySelector('.list-provinsi')
const rowsNegara = document.querySelector('.list-negara')
const waktuD = document.querySelector('.waktu')


getIdData()

getProvData()


function getIdData() {
    return fetch(`${proxy}${ID}`)
        .then(response => response.json())
        .then(response => {
            response.forEach(id => {
                rowsID.innerHTML = tagID(id)

            })
        })
}





function getProvData() {
    return fetch(`${proxy}${PROV}`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            let i = ''
            response.forEach(p => {
                const pD = p.attributes;
                i += tagProvinsi(pD)
                rowsProv.innerHTML = i

            })
        })
}


getNegaraData()


function getNegaraData() {
    return fetch(`${proxy}${NEGARA}`)
        .then(response => response.json())
        .then(response => {
            let o = ''
            response.forEach(n => {
                const nD = n.attributes;
                o += tagNegara(nD)
                rowsNegara.innerHTML = o
                const or = nD.Last_Update
                const waktu = new Date(or)
                waktuD.innerHTML = `<h6>Update Terakhir : <br>${waktu.toUTCString()}</h6>`

            })
        })
}



function tagID(id) {
    return ` <div class="col-md-4 mt-5 ">
  
                <h4 class="">Total Kasus Se-Indonesia</h4>
                <div class="box box-1 shadow text-light">
                    <img class="conge" src="img/sad.png" alt="">
                    <span >${id.positif}</span>
                    <h5 class="text-dark">Positif</h5>
                </div>
                <div class="box box-2 shadow text-light">
                    <img class = "conge"
                    src ="img/happy.png"
                    alt = "" >
                    <span >${id.sembuh}</span>
                    <h5 class="text-dark">Sembuh</h5>
                </div>
                <div class="box box-3 shadow text-light">
                    <img class="conge"
                    src="img/cry.png"
                    alt="" >
                    <span >${id.meninggal}</span>
                    <h5 class="text-dark">Meninggal</h5>
                </div>
            </div>`
}

function tagProvinsi(pD) {
    return `                <tr>
                                <th scope="row">1</th>
                                <td>${pD.Provinsi}</td>
                                <td>${pD.Kasus_Posi}</td>
                                <td> ${pD.Kasus_Semb} </td>
                                <td> ${pD.Kasus_Meni} </td>
                            </tr>`
}


function tagNegara(nD) {
    return ` <tr>
                                <th scope="row">1</th>
                                <td>${nD.Country_Region}</td>
                                <td>${nD.Confirmed}</td>
                                <td> ${nD.Recovered} </td>
                                <td> ${nD.Deaths} </td>
                            </tr>`

}