const state = {
    funds: 10000,
    stocks: []
}


const mutations = {
    "BUY_STOCK" (state, payload) {
        // console.log("payload(ORDER) MOSULES/PORTFOLIO", payload);
  
        const record = state.stocks.find(el => el.id === payload.stockId)
        // console.log("record", record);
        
        if (record) {
            record.quantity += payload.quantity
            
        } else {
            state.stocks.push({
                id: payload.stockId,
                quantity: payload.quantity
            })
        }
        state.funds -= payload.stockPrice * payload.quantity

        // console.log("state in portfolio", state);
        
    },
    'SELL_STOCK' (state, payload) {

        // console.log("payload in sell_stock", payload);
        
        const record = state.stocks.find(el => el.id === payload.stockId)

        // console.log("record in SELL_STOCK", record);
        
        if (record.quantity > payload.quantity) {
            record.quantity -= payload.quantity
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        // console.log(payload.stockPrice);
        // console.log(payload.quantity);
        
        state.funds += payload.stockPrice * payload.quantity

        //  console.log("state in portfolio", state);
    },
    "SET_PORTFOLIO" (state, payload) {

        console.log("SET_PORTFOLIO", payload);
        
        state.funds = payload.funds
        state.stocks = payload.stockPortfolio ? payload.stockPortfolio : []
    }
}


const actions = {
    sellStock({commit}, payload) {
        commit('SELL_STOCK', payload)
    }
}

const getters = {
    stockPortfolio (state, payload) {
        // console.log("payload in stockportfolio", payload);
        
        return state.stocks.map(stock => {
            // console.log("stockkkks", stock);
            
            const record = payload.stocks.find(el => el.id == stock.id)
            // console.log("record", record);
            
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
        
  
        
    },
    funds (state) {
        return state.funds
    }
}



export default {
    state,
    mutations,
    actions,
    getters
}