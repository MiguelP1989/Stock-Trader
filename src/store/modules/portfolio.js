const state = {
    funds: 10000,
    stocks: []
}


const mutations = {
    "BUY_STOCK" (state, payload) {
        console.log("payload(ORDER) MOSULES/PORTFOLIO", payload);
        console.log(payload.stockId);
        
        
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

        console.log("state in portfolio", state);
        
    },
    // 'SELL_STOCK' (state, payload) {
    //     const record = state.stocks.find(el => el.id === payload.stockId)

    //     if (record.quantity > quantity) {
    //         record.quantity -= quantity
    //     } else {
    //         state.stocks.splice(state.stocks.indexOf(record), 1)
    //     }
    //     state.funds += stockPrice * quantity
    // }
}


// const actions = {
//     sellStock({commit}, payload) {
//         commit('SELL_STOCK', payload)
//     }
// }

// const getters = {
//     stockPortfolio (state, payload) {
//         return state.stocks.map(stock => {
//             const record = payload.stocks.find(el => el.id == stock.id)
//             return {
//                 id: stock.id,
//                 quantity: stock.quantity,
//                 name: record.name,
//                 price: record.price
//             }
//         })
//     },
//     funds (state) {
//         return state.funds
//     }
// }


export default {
    state,
    mutations,
    // actions,
    // getters
}