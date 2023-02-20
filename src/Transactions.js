
export default function Transactions(props) {
  const txHash = props.txHash
  return (
    <>
    {
      txHash.map((item, index) => (
        <tr key={index}>
          <th className='w-4/12 border border-solid border-blue-600 overflow-hidden text-gray-200'>{item.hash}</th>
          <th className='w-3/12 border border-solid border-blue-600 overflow-hidden text-gray-200'>{item.from}</th>
          <th className='w-3/12 border border-solid border-blue-600 overflow-hidden text-gray-200'>{item.to}</th>
          <th className='w-2/12 border border-solid border-blue-600 overflow-hidden text-gray-200'>{item.value}</th>
        </tr>
        // <div key={index} className='grid grid-cols-12 w-full '>
        //   <div className='border border-black border-solid w-full col-span-4 overflow-hidden'>{item.hash}</div>
        //   <div className='border border-black border-solid w-full col-span-3 overflow-hidden'>{item.from}</div>
        //   <div className='border border-black border-solid w-full col-span-3 overflow-hidden'>{item.to}</div>
        //   <div className='border border-black border-solid w-full col-span-2 overflow-hidden'>{item.value}</div>
        // </div>
      ))
    }
    </>
  );
}