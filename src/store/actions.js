import Vue from "vue"


export const loadData = ({commit}) => {
    Vue.http.get('data.json')
    .then(resp => resp.json())
    .then(data => {
        console.log("daaaattta", data);
        
        if (data) {
            // const stocks = data.stocks;
            const funds = data.funds;
            const stockPortfolio = data.stockPortfolio;

            const portfolio = {
                stockPortfolio,
                funds
            }

            // console.log("portfolio in action", portfolio);
            // console.log("stock in actions", stocks);
            
            

            // commit('SET_STOCKS', stocks)
            commit('SET_PORTFOLIO', portfolio)
        }
    })
}