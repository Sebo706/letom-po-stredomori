# Pravidla projektu Letom po Stredomori

Tento subor sluzi ako zive pravidla pre upravy statickeho webu Letom po Stredomori.
Pri novych dohodnutych pravidlach ich doplnit sem.

## Obsah a sekcie

- Sekcia `Najnovsie na webe` nesmie obsahovat flash spravy.
- V sekcii `Najnovsie na webe` maju byt najnovsie videa, podcasty a blogy.
- V sekcii `Najnovsie na webe` ma byt na desktope najnovsi obsah ako velka karta vlavo a druhy a treti najnovsi obsah vpravo; nahladove obrazky mensich clankov nemaju byt uzke bocne nahlady, ale siroke horne nahlady podobne ako pri videach.
- Sekcia `Cestovatelsky blog` na homepage ma zobrazovat iba 2 clanky v rovnakom kartovom style ako teraz; dalsie blogy patria do archivu `blog.html` cez tlacidlo `Vsetky clanky`.
- Pri kazdom novom blogovom clanku treba aktualizovat aj sekciu `Destinacie pri mori`: pri prislusnej krajine doplnit alebo upravit pocet clankov a odkaz na `clanky.html?krajina=...`.
- Kazdy blogovy clanok, ktory sa tyka viacerych krajin alebo destinacii, musi byt priradeny ku vsetkym relevantnym krajinam v krajinskych filtroch, kartach a zoznamoch clankov, nie iba k jednej hlavnej teme.
- Pri novom alebo upravenom verejnom obsahu, ktory ma byt dohladatelny na webe, aktualizovat vyhladavaci index `window.LETOM_SEARCH_INDEX` vlozeny v `index.html`; subor `letom-data.js` drzat ako zhodnu zaloznu kopiu indexu.
- Flash spravy patria do sekcie `Letom v skratke: tipy a novinky`.
- Starsie alebo dalsie flash spravy patria do archivu `spravy.html` cez tlacidlo `Dalsie spravy`.
- Kazda flash sprava ma mat samostatnu detailovu podstranku so zdielatelnou URL; karty na homepage aj v archive maju smerovat na detail spravy, nie iba rozbalovat text v zozname.

## Flash spravy

- Na homepage mozu byt v sekcii `Letom v skratke` iba 3 flash spravy.
- Najnovsia flash sprava musi byt vzdy hore.
- Starsie flash spravy sa posuvaju nizsie.
- Ak pribudne nova flash sprava, najstarsia z troch homepage sprav sa presunie iba do archivu.
- Pri leteckych spravach presne rozlisovat, co je uplna novinka a co je pokracovanie, zimne pokracovanie alebo posilnenie uz existujucej alebo skor oznamenej linky.
- Flash spravy maju posobit prakticky, cestovatelsky, doveryhodne a nie bulvarne.

## Homepage

- Homepage ma byt prehladna a nema tahat velke specializovane moduly.
- Poradie sekcii na homepage ma byt logicke podla dolezitosti pre navstevnika: najprv najnovsi obsah a aktualne cestovatelske spravy, potom hlavne navigacne a obsahove sekcie ako destinacie a lety, az potom archivne alebo doplnkove sekcie ako blog, videa, podcasty, itinerar, hlasovanie, informacie o tvorbe a socialne siete.
- PC verzia homepage moze byt plnsia a magazinova, ale mobilna homepage ma byt kratsia, rychla a viac ako rozcestnik.
- Pri dlhsich sekciach na mobile pouzivat kratky teaser alebo hlavnu kartu s jasnym tlacidlom na prislusnu podstranku/archiv.
- Na mobile skracovat najma archivne alebo opakovane sekcie, napriklad `Letom v skratke`, podcasty, blog a itinerar; PC verzia moze pri tychto sekciach ostat detailnejsia.
- Mobilna homepage ma stale zachovat jasne odkazy na kompletne podstranky: `spravy.html`, `audio.html`, `blog.html`, `itinerar.html`, `lety.html` a dalsie relevantne archivy.
- Sekcia `Lety zo Slovenska k Stredomoriu` ma byt na homepage iba ako kratka uputavka s tlacidlom na `lety.html`.
- Kompletny modul letov patri na samostatnu podstranku `lety.html`.

## Lety

- Demo data v `flights-data.js` mozu ostat v subore, ale nesmu sa zobrazovat na stranke.
- Na `lety.html` sa maju zobrazovat pilotne alebo overovane data podla aktualneho rozsahu projektu.
- Pri neoverenych alebo neuplnych udajoch nepouzivat domnienky.
- Chybajuce udaje oznacit stylom `doplnit po overeni` alebo `overit u dopravcu / CK`.
- Pri pravidelnych linkach rozlisovat konkretny zdroj istoty, napriklad letisko Kosice alebo letisko Bratislava.

## Dizajn a UX

- Zachovat svetly, dovolenkovy, premiovy a doveryhodny styl webu.
- Nerozbijat existujuce rozlozenie, odkazy, obrazky ani responzivitu.
- Skontrolovat mobilne aj desktopove zobrazenie pri vacsich vizualnych zmenach.
- Pri akejkolvek zmene verejneho obsahu alebo dizajnu skontrolovat citatelnost textu: nadpisy, odstavce, tlacidla a stitky sa nesmu na mobile ani desktope rozpadat, pretekat mimo obrazovku ani byt neprirodzene natlacene.
- Pri akejkolvek uprave verejnych HTML/JS/CSS suborov skontrolovat aj kodovanie textu a diakritiku v prehliadaci. Text nesmie obsahovat pokazene kodovanie alebo mojibake namiesto slovenskej diakritiky, napriklad rozpadnute znaky v slovach ako Destinacie, Spravy, Vsetky spravy alebo Letom po Stredomori.
- Pri vkladani alebo oprave slovenskych textov nikdy nespoliehat iba na terminalovy vypis. Po uprave spustit kontrolu verejnych HTML/JS/CSS/MD suborov na typicke mojibake znaky a aspon dotknutu stranku overit v prehliadaci.
- Dlhe slovenske texty nevkladat cez nastroje alebo prikazy, ktore mozu zmenit kodovanie. Pouzivat iba postup, ktory zachova UTF-8, a po ulozeni overit diakritiku v samotnej stranke.
- Pri akejkolvek uprave verejnych stranok skontrolovat zarovnanie, centrovanie a vyrez obrazkov na mobile aj desktope. Obrazky nesmu posobit posunute mimo stred, mat nechcene bocne odsadenie ani orezavat dolezitu cast motivu.
- Pri mobilnych upravach skontrolovat, ze nevznika horizontalny posuvnik a ze skryty obsah ma dostupnu cestu cez viditelne tlacidlo na podstranku alebo archiv.
- Nepridavat externe kniznice, ak to nie je vyslovene dohodnute.
- Bezpecne a funkcne tlacidla mimo sekcie `Destinacie pri mori` drzat vizualne zjednotene v tyrkysovom style.
- Socialne ikonove karty mozu ostat brandove.

## Praca s pravidlami

- Ked pouzivatel oznami nove pravidlo pre projekt, doplnit ho do tohto suboru.
- Pred vacsimi obsahovymi alebo strukturalnymi upravami skontrolovat tento subor.
- Po dokonceni kazdej ulohy znovu skontrolovat tento subor a overit, ci vysledok neporusuje projektove pravidla.
- Po dokonceni kazdej ulohy skontrolovat text `Posledna aktualizacia` v pate webu a nastavit ho na aktualny datum poslednej upravy, ak sa menil verejny obsah alebo verejne subory webu.
- Pri kontrole textu `Posledna aktualizacia` overit aj mobilne zobrazenie, aby bol aktualny datum zmeneny a viditelny aj na mobile.

