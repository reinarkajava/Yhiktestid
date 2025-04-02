
Projekti nimi: Kalkulaatori rakendus
 Testitavad komponendid: App, DisplayContainer, ButtonsContainer
 Testimise tööriistad: Jest + React Testing Library
 Testimise liik: Ühiktestid
 Testimise eesmärk: Kontrollida kalkulaatori põhifunktsioonide ja UI elementide korrektsust




Testimise alla kuuluvad:
Kalkulaatori põhifunktsioonid: sisestamine, arvutamine, operaatorid, tühistamine, kustutamine, Display ja tulemuste korrektne kuvamine Kasutajavead (nt vale operaatori kasutamine)
ja Tulemuste kuvamine ja uuesti arvutamise võimalus.


Ühiktestide nimekiri: 
1 Kontrollida, et kalkulaator renderdub edukalt
Kõik peamised elemendid on olemas (Display, nupud, autoritekst)
2 Number kuvatakse ekraanil kui vajutada numbrinuppu 
Display näitab vajutatud numbrit
3 Mitme numbri järjestikune sisestamine
Display näitab sisestatud numbrite jada
4 Operaatori sisestamine korrektse avaldise järel
Operaator kuvatakse õigesti (näiteks 3 + )
5 Operaatori sisestamine tühjale väljale on keelatud
Display jääb tühjaks, operaatorit ei lisata
6 Lihtne liitmine
Avaldis 4 + 5 annab tulemuseks 9
7 Lihtne lahutamine
Avaldis 8 - 3 annab tulemuseks 5
8 Lihtne korrutamine
Avaldis 2 * 3 annab tulemuseks 6
9 Lihtne jagamine
Avaldis 8 / 2 annab tulemuseks 4
10 Tühjenda nupp eemaldab kogu sisu
Display ja result muutuvad tühjaks
11 Backspace eemaldab viimase sisestatud märgi
Display kustutab viimase numbri või märgi


