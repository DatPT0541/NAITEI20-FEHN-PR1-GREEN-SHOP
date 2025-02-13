const SubTitle = ({ title }) => {
  return (
    <div className="flex items-center justify-between mb-3 border-b border-gray-200 relative">
      <div className="relative">
        <h2 className="text-green-600 font-semibold">Sản phẩm mua nhiều</h2>
        <span className="absolute bottom-[-2px] left-0 w-[160px] h-[3px] bg-green-600"></span>
      </div>
    </div>
  )
}

export default SubTitle;