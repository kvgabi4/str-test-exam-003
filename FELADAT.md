# Gyakorló feladatok

## Kezdő lépések
- Klónozza ezt a repository -t a saját gépére.
- A VSCode gyökere a repository gyökér mappája legyen (nem kell belépni almappába).
- Telepítse a függőségeket.
- Összes teszt futtatása: `npm test`.

## JS-task/task01-algorithm
### Tesztek
- Értelmezze a __test__ mappában található teszteket.
- A munkáját manuálisan is tesztelheti, ha indít egy live-server -t 
az index.html fájlokra.
- Az automata teszteket az `npm test -- main.test.spec.js` paranccsal indíthatja.

### 1. Feladat
- A main.js fájlban talál egy függvényt `customerFilter` néven.
- A következőképpen kell működnie a függvénynek:
- három paramétert vár: vásárlók listája, név, értékelés
- azoknak a customer -eknek a nevét (CSAK A NEVÉT) kell visszaadnia egy tömbben, 
amelyek name tulajdonságában szerepel a kapott szövegrészlet és 
rating -juk LEGALÁBB annyi mint a kapott rating.

## JS-task/task02-dom
### Tesztek
- Értelmezze a __test__ mappában található teszteket.
- A munkáját manuálisan is tesztelheti, ha indít egy live-server -t 
az index.html fájlokra.
- Az automata teszteket az `npm test -- dom.test.spec.js` paranccsal indíthatja.

### 2. Feladat
- A dom.js fájlban talál egy függvényt `changeElements` néven.
- A következőképpen kell működnie a függvénynek:
- megkeres az oldalon minden `example` osztályba tartozó elemet és két stílust 
állít be rájuk JAVASCRIPT segítségével: háttérszín `red` és font stílus `italic`.

--------------------------
### 3. Feladat
- Hozzon létre egy Angular alkalmazást tetszőleges helyen (nem kötött a név).
- Legyen benne három réteg: class -> service -> component.
- Az élő json szerverről kérje le a vásárlókat.
- A szerver elérhetősége: `https://nettuts.hu/jms/<githubname>/customers` 
(a <githubname> helyére kerüljön az ön github user -neve)
- Értelmezze a szerveren elérhető vásárlókat és azok alapján hozza létre a 
szükséges osztályokat.
- Készítsen egy teljes értékű CRUD -ot (getAll, get, create, update, delete) 
egy megfelelő service -ben.

### 4. Feladat
- Az adatokat táblázatos formában jelenítse meg a főoldalon.
- Minden sorhoz tartozzon egy törlés gomb.
- A törlés gombra kattintva törlődjön az adatbázisból az adott entitás és 
frissüljön a táblázat.

### 5. Feladat
- Legyen egy űrlap, ahol fel lehet venni új entitást (most Customer).
- Ezt az űrlapot egy gombról lehessen megnyitni, ami a táblázat felett található.
- A gomb egy új űrlapra navigáljon, ahol bevihetőek az új entitás adatai.
- Az adatok értelemszerűen legyenek validálva, minden adat kötelező legyen.
- Alkalmazzon szabványos Angular Routing -ot az oldalak váltására.

### 6. Feladat
- A kész Angular alkalmazást publikálja a saját Github oldalán. 
`https://<githubname>.github.io`
