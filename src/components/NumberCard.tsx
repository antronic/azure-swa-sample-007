interface IProps {
  number: string
}

const NumberCard: React.FC<IProps> = (props) => {
  return (
    <div className="bg-slate-50 rounded-lg text-edit px-12 py-4 mb-4">
      <p className="text-xl text-slate-800">
        {props.number}
      </p>
    </div>
  )
}

export default NumberCard