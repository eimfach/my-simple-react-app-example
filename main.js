function PageShoppingApp () {
  const pageFilterHeading =
    <h2>Choose Options</h2> // split from FilterOptions to make them reusable
  return (
    <div>
      <PageHeading />
      <FilterOptions heading={pageFilterHeading} />
      <ShoppingView />
    </div>
  )
}

ReactDOM.render(
  <PageShoppingApp />,
  document.getElementById('root')
)

function getPageData () {
  return {
    header: ['year', 'model', 'price', 'buy'],
    categories: ['Cars', 'Trucks', 'Convertibles'],
    items: {
      Cars: [
         ['2013', 'A', '$32000'],
          ['2011', 'B', '4400'],
          ['2016', 'B', '15500']
      ],
      Trucks: [
        ['2014', 'D', '18000'],,
         ['2013', 'E', '5200']
      ],
      Convertibles: [
        ['2009', 'F', '2000'],
         ['2012', 'H', '12500'],
         ['2017', 'M', '50000'],
         ['2010', 'G', '6000']
      ]
    }
  }
}

function PageHeading (props) {
  return (
    <div>
      <h2>Welcome to React Transportation</h2>
      <p>The best place to buy vehicles online</p>
    </div>
  )
}

function FilterOptions (props) {
  return (
    <div>
      {props.heading}

      <input
        type='checkbox' id='new_only' name='filter_new_only' value='new_only' checked
      />
      New Only
      <p />
      Select Type
      <select>
        <option value='All'>All</option>
        <option value='Cars'>Cars</option>
        <option value='Trucks'>Trucks</option>
        <option value='Convertibles'>Convertibles</option>
      </select>
    </div>
  )
}

function ShoppingView (props) {
  const pageData =
    getPageData()

  const sections = Object.keys(pageData.items).map(
    (categoryName) =>
      (<ShoppingCategory name={categoryName} items={pageData.items[categoryName]} />)
  )

  const view =
    <div>
      {sections}
    </div>

  return view

  function ShoppingItem (props) {
    return (
      <tr>
        <td>{props.year}</td>
        <td>{props.model}</td>
        <td>{props.price}</td>
        <td><button>Buy Now</button></td>
      </tr>
    )
  }

  function ShoppingCategory (props) {
    const shoppingItems =
        props.items.map(([year, model, price]) =>
          (<ShoppingItem year={year} model={model} price={price} />)
        )
    
    return (
      <div>
        <h2>{props.name}</h2>
        <table>
          <thead>
            <tr>
              {pageData.header.map((columnName) => (<th>{columnName}</th>))}
            </tr>
          </thead>
          {shoppingItems}
        </table>
      </div>
    )
  }
}
