const myName = "pinje";
let age = 15;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if (age > 10 && age < 18) {
        generasi = "Anda Remaja";
    } 
    else if (age > 18 && age < 30) {
        generasi = "Anda Dewasa";
    }
    else if (age >= 30) {
        generasi = "Anda Tua";
    }
    else if (age > 2 && age < 10) {
        generasi = "Anda Anak-anak";
    }
    else {
        generasi = "Anda bayi kali";
    }
    return biodata.innerHTML = generasi;
}

console.log(myName);
console.log(age);

generateBiodata();