// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="faqs-container">
        <h1 className="heading">FAQS</h1>
        <ul className="faqs-list">
          {faqsList.map(eachFaq => (
            <FaqItem keys={eachFaq.id} faqDetails={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
