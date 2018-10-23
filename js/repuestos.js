//   repuestos

const wacker = document.querySelector('.r-wacker');
const aliafor = document.querySelector('.r-aliafor');
const donaldson = document.querySelector('.r-donaldson');
const ipd = document.querySelector('.r-ipd');

// console.log(aliafor);
// console.log(donaldson);
// console.log(ipd);
const buttonWacker = document.querySelector('#btn-wacker');
const buttonAliafor = document.querySelector('#btn-aliafor');
const buttonDonaldson = document.querySelector('#btn-donaldson');
const buttonIpd = document.querySelector('#btn-ipd');
console.log(buttonWacker);
// console.log(buttonAliafor);
// console.log(buttonDonaldson);
// console.log(buttonIpd);

buttonWacker.addEventListener('click', hideShow);



buttonAliafor.addEventListener('click', hideShowAliafor);
buttonDonaldson.addEventListener('click', hideShowDonaldson);
buttonIpd.addEventListener('click', hideShowIpd);

function hideShow(){
    if (wacker.classList.contains('is-active')){
        // wacker.classList.remove('is-active');
    }else {
        wacker.classList.add('is-active');
        aliafor.classList.remove('is-active');
        donaldson.classList.remove('is-active');
        ipd.classList.remove('is-active');
    }
    }
    function hideShowAliafor(){
        if (aliafor.classList.contains('is-active')){
            aliafor.classList.remove('is-active');
            wacker.classList.add('is-active');
        }else {
            aliafor.classList.add('is-active');
            wacker.classList.remove('is-active');
            donaldson.classList.remove('is-active');
            ipd.classList.remove('is-active');
        }
        }
        function hideShowDonaldson(){
            if (donaldson.classList.contains('is-active')){
                donaldson.classList.remove('is-active');
                wacker.classList.add('is-active');
                
            }else {
                aliafor.classList.remove('is-active');
                wacker.classList.remove('is-active');
                donaldson.classList.add('is-active');
                ipd.classList.remove('is-active');
            }
            }
            function hideShowIpd(){
                if (ipd.classList.contains('is-active')){
                   ipd.classList.remove('is-active');
                    wacker.classList.add('is-active');
                    
                }else {
                    aliafor.classList.remove('is-active');
                    wacker.classList.remove('is-active');
                    donaldson.classList.remove('is-active');
                    ipd.classList.add('is-active');
                }
                }
