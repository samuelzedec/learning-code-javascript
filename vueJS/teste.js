async function Requisition() {
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json"

    const res = await fetch(url)

    const data = await res.json()

    const arr = Object.keys(data.bpi).map(key => {
        return {
            code: data.bpi[key].code,
            symbol: data.bpi[key].symbol,
            rate: data.bpi[key].rate,
            description: data.bpi[key].description,
            rate_float: data.bpi[key].rate_float
        }
    })

    console.log(data)
}

Requisition()

/*
<!--  <article v-for="coin in coins.data" :key="coin.code">-->
    <!--    <h1>Code: {{ coin.code }}</h1>
    &lt;!&ndash;    <ul>&ndash;&gt;
    &lt;!&ndash;      <li>Symbol: {{ coin.symbol }}</li>&ndash;&gt;
    &lt;!&ndash;      <li>Rate: {{ coin.rate }}</li>&ndash;&gt;
    &lt;!&ndash;      <li>Description: {{ coin.description }}</li>&ndash;&gt;
    &lt;!&ndash;      <li>Rate Float: {{ coin.rate_float }}</li>&ndash;&gt;
    &lt;!&ndash;    </ul>&ndash;&gt;

</article>-->*/
