import './forms.css'

export default function Forms(props) {
  return (
    <div className={props.containerForm}>
        <form action="" >
            <label className={props.styleFormLabel} htmlFor=""></label>
            <input className={props.styleInputForm} type="text" name="" id="" />
        </form>
    </div>
  )
}
