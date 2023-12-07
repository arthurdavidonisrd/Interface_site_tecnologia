const catalago = [
    {
        id: 1,
        nome: "Xbox One S",
        marca: "Microsoft",
        preco: 1700,
        nome_arq_img: "xbox_console.jpg"
    },
    {
        id:2,
        nome: "Controle PS4",
        marca: "Sony",
        preco: 120,
        nome_arq_img: "ps4_control.jpg",
    },
    {
        id:3,
        nome: "Controle Xbox One",
        marca: "Microsoft",
        preco: 150,
        nome_arq_img: "xbox_controle.jpg",
    
    },
    {
        id:4,
        nome: "Xbox Series X",
        marca: "Microsoft",
        preco: 3750,
        nome_arq_img: "xbox_series_x.png",
    },
    {
        id:5,
        nome: "RTX 3080 TI",
        marca: "Asus",
        preco: 9500,
        nome_arq_img: "rtx_3080 TI.jpg"

    },
    {
        id:6,
        nome: "Monitor Samsung / 75Hz / 22 FHD",
        marca: "Samsung",
        preco: 900,
        nome_arq_img: "monitor samsung.jpg"
        
    },
    {
        id:7,
        nome: "Mouse Razer Deatheader",
        marca: "Razer",
        preco: 250,
        nome_arq_img: "razerd.jpg"
        
    },
    {
        id:8,
        nome: "Fallen Morcego",
        marca: "Fallen Gear",
        preco: 350,
        nome_arq_img: "fallen.jpg" 
    },
    {
        id:9,
        nome: "Mousepad HyperX Gaming Fury",
        marca: "HyperX",
        preco: 120,
        nome_arq_img: "mousepad.jpg" 
        
    },
    {
        id:10,
        nome: "PROCESSADOR INTEL 9900K CORE I9 ",
        marca: "Intel",
        preco: 5500,
        nome_arq_img: "i7.jpg"

    },
    {
        id:11,
        nome: "Cadeira gamer Corsair TC200 ",
        marca: "Corsair",
        preco: 5500,
        nome_arq_img: "cadeira.jpg"
    },
    {
        id:12,
        nome: "Razer Blackwidow X Tournament Chroma ",
        marca: "Corsair",
        preco: 5500,
        nome_arq_img: "razern.jpg"
    }
    

]

for(const produtoCatalago of catalago){
    const cartaoProduto = `<div id="card-produto-1">
<img src="fotos/${produtoCatalago.nome_arq_img}" 
alt=""
style="width: 200px;",>
<p>${produtoCatalago.marca}</p>
<p>${produtoCatalago.nome}</p>
<p>${produtoCatalago.preco}</p>
<a href="#">carrinho+</a>
</div>`

document.getElementById("container-produto").innerHTML += cartaoProduto;

}



