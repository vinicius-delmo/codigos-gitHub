import "./styles.css";

const EmptyState = () => {
  return (
    <div className="emptyStateContainer">
      <img src="/EmptyState/emptyState.png" alt="" id="emptyStateImage"/>
       <h1>No results found</h1>
       <p>The page was not found, <a href="/">click here</a>  to return to Home.</p>
    </div>
  )
}

export default EmptyState