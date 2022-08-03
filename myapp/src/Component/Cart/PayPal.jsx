


import React, { useState, useEffect } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { toast } from 'react-toastify'


const PayPal = ({ TotalAll }) => {


  const [paid, setPaid] = useState(false)
  const [Count, setCount] = useState(0)

  const [error, seterror] = useState("")

  useEffect(() => {
    Get()

  }, [])
  const Get = () => {
    let sum = 0
    TotalAll.map((value, index) => {
      sum += value.price;
      setCount(sum + 25 - 50)
    })
    
  }

  const handleAprrove = (order) => {
    setPaid(true)
  }


  if (paid) {
    toast.success('thanks you paid successfully ..')

  }
  if (error) {
    alert(error)
  }


  //  console.log(total)
  return (
    <>
      {Count !== 0 ?
        <>
          <PayPalButtons
            style={{

              color: 'blue',
              shape: 'pill',
              label: 'pay',
              height: 40,
              layout: "horizontal"
            }}


            onClick={(data, actions) => {
              let AlreadyHaveACoount = false;
              if (AlreadyHaveACoount) {
                seterror("you have aleady acoount")

                return actions.reject()
              }

              else {
                return actions.resolve()
              }

            }}

            createOrder={(data, actions) => {

              return actions.order.create({

                purchase_units: [
                  {
                    description: `you buys quantity og`,
                    amount: {
                      value: Count
                    }

                  }



                ]

              })

            }}


            onApprove={async (data, actions) => {

              const order = await actions.order.capture()
              console.log("order", order)


              handleAprrove(data.orderID)
            }}
            onError={(err) => {
              seterror(err)
              console.error("error", err)
            }

            }
          />

        </>
        : ""
      }

    </>
  )
}

export default PayPal