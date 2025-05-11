 

const PromotedCard = (FoodCard) => {
  
    return (props) => {
        return (
            <div className="relative">
                <span className="absolute right-0 p-2 bg-gray-100">Promoted</span>
                <FoodCard {...props} />
            </div>
        )
    }
}
 
export default PromotedCard;