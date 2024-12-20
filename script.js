var jmlAngkot = 10, 
    angkotAktif = 9,
    noAngkot = 1;

while (noAngkot <= angkotAktif) {
    console.log('Angkot No. '+ noAngkot + ' Beroperasi');
noAngkot++;
}

// for(noAngkot; noAngkot <= jmlAngkot; noAngkot++){
//     console.log('Angkot No. ' + noAngkot + ' Sedang tidak beroperasi');
// }

for(noAngkot = angkotAktif + 1; noAngkot <= jmlAngkot; noAngkot++){
    console.log('Angkot No. ' + noAngkot + ' Sedang tidak beroperasi');
}