import moment from "moment";
import { messTypes, weeziAssistant, discount } from "../data/data";
import { revestNumber } from "../tools";
import { userLogin } from "../data/mockData";


export const _generateDataTransSendMess = (transaction) => {
    let mess = [];
    if (Object.assign(transaction).length === 0) {
      return mess;
    }
    switch(transaction.type){
        case 'topup':{
           mess = [
            {
              messType: messTypes.text,
              messInfo: {
                text: `Nạp ${revestNumber(
                  transaction.denominations
                )} VND vào số điện thoại ${transaction.user.phone} `,
                icon: ""
              },
              time: moment().format("HH:mm"),
              fromID: userLogin.id,
              toID: weeziAssistant.id,
              isRead: true
            },
            {
              messType: messTypes.text,
              messInfo: {
                text: `Hãy xác nhận lại thông tin giao dịch bên dưới nhé:`,
                icon: ""
              },
              time: moment().format("HH:mm"),
              fromID: weeziAssistant.id,
              toID: userLogin.id
            },
            {
              messType: messTypes.topup,
              messInfo: {
                phone: transaction.user.phone,
                denominations: transaction.denominations,
                discount: transaction.discount,
                paymentAmount:
                  transaction.denominations - transaction.denominations * discount
              },
              time: moment().format("HH:mm"),
              fromID: weeziAssistant.id,
              toID: userLogin.id
            },
          ];
          break;
        }
        case 'buycard':{
          mess = [
            {
              messType: messTypes.text,
              messInfo: {
                text: `Mua mã thẻ ${revestNumber(
                  transaction.denominations
                )} VND ${transaction.provider} `,
                icon: ""
              },
              time: moment().format("HH:mm"),
              fromID: userLogin.id,
              toID: weeziAssistant.id,
              isRead: true
            },
            {
              messType: messTypes.text,
        
              messInfo: {
                text: `Hãy xác nhận lại thông tin giao dịch bên dưới nhé:`,
                icon: ""
              },
              time: moment().format("HH:mm"),
              fromID: weeziAssistant.id,
              toID: userLogin.id
            },
            {
              messType: messTypes.buycard,
              messInfo: {
                provider: transaction.provider,
                denominations: transaction.denominations,
                discount: discount,
                paymentAmount:
                  transaction.denominations - transaction.denominations * discount
              },
              time: moment().format("HH:mm"),
              fromID: weeziAssistant.id,
              toID: userLogin.id
            }
          ];
          break;
    
        }
        case 'transfer':{
          mess = [
            {
              messType: messTypes.text,
              messInfo: {
                text: `Chuyển cho PHAM KIEU OANH, 
                Số tài khoản 1902993163601,
                Ngân hàng Techcombank `,
                icon: ""
              },
              time: moment().format("HH:mm"),
              fromID: userLogin.id,
              toID: weeziAssistant.id,
              isRead: true
            },
            {
              messType: messTypes.text,
              messInfo: {
                text: `Hãy xác nhận lại thông tin giao dịch bên dưới nhé:`,
                icon: ""
              },
              time: moment().format("HH:mm"),
              fromID: weeziAssistant.id,
              toID: userLogin.id
            },
            {
              messType: messTypes.transfer,//mesTypes.transfer 
              messInfo: {
                numberFindUser: transaction.numberFindUser,
                user: transaction.user && transaction.user,
                bank: transaction.bank,
                branch: transaction.branch && transaction.branch,
                currency: transaction.currency,
                description: transaction.description,
                transFee: transaction.transFee && transaction.transFee,
              },
              time: moment().format("HH:mm"),
              fromID: weeziAssistant.id,
              toID: userLogin.id
            },
          ];
          break;
        }
        case 'paybill':{
          mess = [
            {
              messType: messTypes.text,
              messInfo: {
                text: `${transaction.key === "waterBill" ? messWaterBill : messElectricBill}`,
                icon: ""
              },
              time: moment().format("HH:mm"),
              fromID: userLogin.id,
              toID: weeziAssistant.id,
              isRead: true
            },
            {
              messType: messTypes.text,
              messInfo: {
                text: `Hãy xác nhận lại thông tin giao dịch bên dưới nhé:`,
                icon: ""
              },
              time: moment().format("HH:mm"),
              fromID: weeziAssistant.id,
              toID: userLogin.id
            },
            {
              messType: messTypes.payBill,//mesTypes.transfer 
              messInfo: {
                provider: transaction.provider,
                customerCode: transaction.customerCode,
                customerName:transaction.customerName,
                customerPhone: transaction.customerPhone,
                periodBill: transaction.periodBill,
                payment: transaction.payment,
              },
              time: moment().format("HH:mm"),
              fromID: weeziAssistant.id,
              toID: userLogin.id
            },
          ];
          break;
    
        }

        default:
          break;
      }

    return mess;
}

/**
 * 
 * @param {string} typeTransaction 
 * @param {object} dataTransaction 
 * [description] after confirm or cancel call Api action transaction ---> Receive mockupdata to render message 
 */
export const _generateDataSendMessAfterConfirm = (typeTransaction,dataTransaction) => {
  let mess = [];

  switch (typeTransaction) {
    case "topup":
      mess = [
        {
          messType: messTypes.text,
          messInfo: {
            text: `Xác nhận giao dịch thành công`,
            icon: "done"
          },
          time: moment().format("HH:mm"),
          fromID: weeziAssistant.id,
          toID: userLogin.id
        },
        {
          messType: messTypes.text,
          messInfo: {
            text: `Cảm ơn bạn `,
            icon: "kiss"
          },
          time: moment().format("HH:mm"),
          fromID: weeziAssistant.id,
          toID: userLogin.id
        },
      ]
      break;

    case "buycard":
        mess = [
          {
            messType: messTypes.text,
            messInfo: {
              key: messTypes.success,
              text: `Xác nhận giao dịch thành công`,
              icon: "done"
            },
            time: moment().format("HH:mm"),
            fromID: weeziAssistant.id,
            toID: userLogin.id
          },
          {
            messType: messTypes.text,
            messInfo: {
              key: messTypes.success,
              text: `Đây là thông tin thẻ của bạn`,
              icon: ""
            },
            time: moment().format("HH:mm"),
            fromID: weeziAssistant.id,
            toID: userLogin.id
          },
          {
            messType: messTypes.buycard,
            messInfo: { ////// receive from socket
              key: messTypes.success,
              provider: dataTransaction.provider,
              denominations: dataTransaction.denominations,
              seriNumber: dataTransaction.seriNumber,
              cardNumber: dataTransaction.cardNumber
            },
            time: moment().format("HH:mm"),
            fromID: weeziAssistant.id,
            toID: userLogin.id
          },
          {
            messType: messTypes.text,
            messInfo: {
              text: `Cảm ơn bạn`,
              icon: "kiss"
            },
            time: moment().format("HH:mm"),
            fromID: weeziAssistant.id,
            toID: userLogin.id
          },
        ]
      break;

      case "transfer":
          mess = [
            {
              messType: messTypes.text,
              messInfo: {
                key: messTypes.success,
                text: `Xác nhận giao dịch thành công`,
                icon: "done"
              },
              time: moment().format("HH:mm"),
              fromID: weeziAssistant.id,
              toID: userLogin.id
            },
            {
              messType: messTypes.text,
              messInfo: {
                key: messTypes.success,
                text: `Hệ thống đã tự lưu thông tin người chuyển vào danh sách hưởng lợi`,
                icon: ""
              },
              time: moment().format("HH:mm"),
              fromID: weeziAssistant.id,
              toID: userLogin.id
            },
            {
              messType: messTypes.text,
              messInfo: {
                text: `Cảm ơn bạn`,
                icon: "kiss"
              },
              time: moment().format("HH:mm"),
              fromID: weeziAssistant.id,
              toID: userLogin.id
            },
          ]
        break;

        case "paybill":
            mess = [
              {
                messType: messTypes.text,
                messInfo: {
                  key: messTypes.success,
                  text: `Xác nhận giao dịch thành công`,
                  icon: "done"
                },
                time: moment().format("HH:mm"),
                fromID: weeziAssistant.id,
                toID: userLogin.id
              },
              {
                messType: messTypes.text,
                messInfo: {
                  key: messTypes.success,
                  text: `Hệ thống đã tự lưu thông tin người chuyển vào danh sách hưởng lợi`,
                  icon: ""
                },
                time: moment().format("HH:mm"),
                fromID: weeziAssistant.id,
                toID: userLogin.id
              },
              {
                messType: messTypes.text,
                messInfo: {
                  text: `Cảm ơn bạn`,
                  icon: "kiss"
                },
                time: moment().format("HH:mm"),
                fromID: weeziAssistant.id,
                toID: userLogin.id
              },
            ]
          break;
  
    default:
      break;
  }

  return mess;
}




const messElectricBill = "Thanh toán hóa đơn Điện lực Hồ Chí Minh, Mã KH: PE018541115187003"


const messWaterBill = "Thanh toán hóa đơn Nước, Mã KH: PE018541115187003"