import React from 'react'
import mo from "../../public/image/mo.jpg"
import wallet from "./../assets/wallet.jpg"

import { IoFastFood } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsHouseFill } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { url } from 'inspector';




function page() {
  return (
    <div> 
        
                            {/* Background*/}
        <div className='flex bg-teal-300 w-[1488px] h-[708px]'>
        <div>
        {/*<img src={mo} alt="" style={{height: "200px", width: "500px"}} />*/}
        </div>

        
                            {/* Title*/}
                  <div className='flex 
                                  font-bold font-sans text-2xl  text-orange-500 text-shadow
                                  pt-[40px] pl-[740px]'>My
                  </div>

                  <div className='flex 
                                  font-bold font-sans text-2xl  text-white text-shadow
                                  pt-[40px] pl-2'>Wallet
                  </div>

                            {/* Calculations*/}
                  <div className='flex bg-orange-500 
                                  w-[450px] h-[610px] mt-[90px] ml-[-50px]
                                  shadow-2xl rounded-lg'>


                                          {/* Salary part1: income text*/}
                          <div className='font-bold font-sans text-50  text-lg 
                                          pl-[186px] uppercase pt-7'>Income</div>

                                    <div className='flex  mt-[10px] ml-[-173px]'>

                                                    {/* Salary part2: label text*/}
                                            <label className='relative mx-2 mt-16 mr-10'>

                                                                {/* Salary part3: input box*/}
                                                      <input required type="text" className=' py-2 text-black font-bold
                                                                                    text-lg shadow-lg
                                                                                    border-2 border-black hover:border-black
                                                                                    duration-200 peer focus:border-white
                                                                                    rounded outline-none bg-inherit'></input>


                                                                  {/* Salary part4: enter your salary text*/}
                                                      <span className='absolute left-0 top-2 px-11 text-sm text-black font-sans font-bold  text-shadow
                                                                      tracking-wide peer-focus:text-white uppercase
                                                                      pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5
                                                                       bg-orange-500 ml-4 peer-valid:text-sm peer-valid:-translate-y-5'><GiTakeMyMoney className='flex absolute ml-[-20px] mt-1' />Enter your Salary</span>
                                            </label>
                                    </div>



                                          {/* Expense part1: Expense  text*/}
                          <div className='uppercase font-sans font-bold text-50 text-lg
                                          flex mt-[130px] ml-[-215px]'>Expenses</div>


                                  <div className='flex  mt-[110px] ml-[-175px]'>

                                                    {/* Expense part2: label text*/}
                                            <label className='relative mx-2 mt-16 mr-10'>

                                                                {/* Expense part3: input box*/}
                                                      <input required type="text" className=' py-2 
                                                                                    text-lg shadow-lg font-bold text-black
                                                                                    border-2 border-black hover:border-black
                                                                                    duration-200 peer focus:border-white
                                                                                    rounded outline-none bg-inherit'></input>


                                                                  {/* Expense part4: food expenses text*/}
                                                      <span className='absolute left-0 top-2 px-[64px] text-sm text-black font-sans font-bold  text-shadow
                                                                      tracking-wide peer-focus:text-white uppercase
                                                                      pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5
                                                                       bg-orange-500 ml-3 peer-valid:text-sm peer-valid:-translate-y-5'><IoFastFood className='flex absolute ml-[-20px] mt-1'/>Food Expenses</span>
                                            </label>
                                  </div>








                                  <div className='flex  mt-[180px] ml-[-305px]'>

                                                  {/*Monthly Rent part2: label text*/}
                                          <label className='relative mx-2 mt-16 mr-10'>

                                                              {/* Monthly Rent part3: input box*/}
                                                    <input required type="text" className=' py-2 
                                                                                  text-lg shadow-lg text-black font-bold
                                                                                  border-2 border-black hover:border-black
                                                                                  duration-200 peer focus:border-white
                                                                                  rounded outline-none bg-inherit'></input>


                                                                {/* Monthly Rent part4: Monthly expenses text*/}
                                                    <span className='absolute left-0 top-2 px-16 text-sm text-black font-sans font-bold  text-shadow
                                                                    tracking-wide peer-focus:text-white uppercase
                                                                    pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5
                                                                     bg-orange-500 ml-3 peer-valid:text-sm peer-valid:-translate-y-5'><BsHouseFill className='flex absolute ml-[-20px] mt-1 ' /> Monthly Rent</span>
                                          </label>
                                  </div>






                                  <div className='flex  mt-[250px] ml-[-303px]'>

                                                  {/*Other Expense part2: label text*/}
                                          <label className='relative mx-2 mt-16 mr-10'>

                                                              {/* Other Expense part3: input box*/}
                                                    <input required type="text" className=' py-2 
                                                                                  text-lg text-black font-bold
                                                                                  border-2 border-black hover:border-black
                                                                                  duration-200 peer focus:border-white shadow-lg
                                                                                  rounded outline-none bg-inherit'></input>


                                                                {/* Other Expense part4: other expenses text*/}
                                                    <span className='absolute left-0 top-2 px-[72px] text-sm text-black font-sans font-bold  text-shadow tracking-tighter 
                                                                  peer-focus:text-white uppercase
                                                                    pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5
                                                                     bg-orange-500 ml-[3px] peer-valid:text-sm peer-valid:-translate-y-5'><BiCameraMovie className='flex absolute ml-[-20px] mt-1 '/>other Expenses</span>
                                          </label>
                                  </div>





                                      
                                   
                          <div className='flex mt-[380px] ml-[-214px]'>
                            <button className=' btn bg-50 text-orange-500 
                                              font-sans font-bold uppercase text-shadow'>Calculate</button>
                          </div>


                        <div className='uppercase font-sans font-bold text-black text-sm 
                                          flex mt-[440px] ml-[-135px]'>Total Expenses : 0000</div>

                        <div className='uppercase font-sans font-bold text-black text-sm 
                                          flex mt-[460px] ml-[-125px]'>Balance : 0000</div>  





                        <div className='flex  mt-[433px] ml-[-204px]'>

                                                  {/*Other Expense part2: label text*/}
                                          <label className='relative mx-2 mt-16 mr-10'>
                                                

                                                              {/* Other Expense part3: input box*/}
                                                    <input required type="text" className=' py-2 w-[209px]
                                                                                  text-lg text-black font-bold
                                                                                  border-2 border-black hover:border-black
                                                                                  duration-200 peer focus:border-white shadow-lg
                                                                                  rounded outline-none bg-inherit'></input>

                                                        


                                                                {/* Other Expense part4: other expenses text*/}
                                                    <span className='absolute left-0 top-2 px-[27px] text-sm text-black font-sans font-bold  text-shadow
                                                                    tracking-wide peer-focus:text-white uppercase 
                                                                    pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5
                                                                     bg-orange-500 ml-3 peer-valid:text-sm peer-valid:-translate-y-5'><GiReceiveMoney className='flex absolute ml-[-20px] mt-1 '/>Want to save %</span>


                                                
                                                <button className='rounded uppercase bg-50 w-[62px] h-[48px] text-orange-500
                                                        ml-[-19px] mt-[-4px] font-bold font-sans 
                                                '> Save</button>

                                          </label>
                                  </div> 





                        <div className='uppercase font-sans font-bold text-black text-sm 
                                          flex mt-[550px] ml-[-240px]'>Saving amount : 0000</div>

                        <div className='uppercase font-sans font-bold text-black text-sm 
                                          flex mt-[570px] ml-[-178px]'>Remaining balance : 0000</div>

    

                </div>
        </div>

        

    </div>

   
  )
}

export default page