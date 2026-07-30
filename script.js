const routes = {

"Pejabat":
`
🏢 <b>Pejabat</b><br><br>

➡️ Jalan terus.<br>

⬅️ Belok kiri di simpang pertama.<br>

🏢 Pejabat berada di hadapan.
`,

"Bilik Guru":
`
👩‍🏫 <b>Bilik Guru</b><br><br>

➡️ Jalan terus.<br>

➡️ Naik tangga.<br>

🚪 Bilik Guru berada di sebelah kanan.
`,

"Kantin":
`
🍔 <b>Kantin</b><br><br>

➡️ Jalan terus.<br>

🌳 Lalui kawasan taman.<br>

🍔 Kantin berada di sebelah kiri.
`,

"Surau":
`
🕌 <b>Surau</b><br><br>

➡️ Jalan terus.<br>

⬅️ Belok kiri.<br>

🕌 Surau berada di hujung bangunan.
`,

"Perpustakaan":
`
📚 <b>Perpustakaan</b><br><br>

➡️ Jalan terus.<br>

📖 Bangunan kedua di sebelah kanan.
`,

"Makmal Komputer":
`
💻 <b>Makmal Komputer</b><br><br>

➡️ Jalan terus.<br>

⬆️ Naik ke tingkat satu.<br>

💻 Makmal berada di hujung koridor.
`,

"Dewan":
`
🏫 <b>Dewan</b><br><br>

➡️ Jalan terus.<br>

🏫 Bangunan besar di hadapan.
`,

"Padang":
`
⚽ <b>Padang</b><br><br>

➡️ Jalan terus.<br>

🌳 Melepasi kantin.<br>

⚽ Padang berada di sebelah kanan.
`

};

function showRoute(place){

document.getElementById("result").innerHTML=routes[place];

}
