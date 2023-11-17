/* richiesta nome  */
let nome= prompt `inserisci il tuo nome`; 
console.log(nome);

/* richiesta cognome */
let cognome= prompt `inserisci il tuo cognome`;
console.log(cognome);

/* richietsa cognome */
let colorePreferito= prompt `inserisci il tuo colore preferito`;
console.log(colorePreferito);

/* unione di tutte e tre al numero 23 */
 let passwordGenerata= nome + cognome + colorePreferito + 23; 
 console.log(passwordGenerata);


 /*mandiamo in output il risultato   */

/*  document.getElementById(`password`).innerHTML=  document.getElementById(`password`).innerHTML +` `+ passwordGenerata;  */

document.getElementById(`password`).innerHTML=`${document.getElementById(`password`).innerHTML} ${passwordGenerata}`;