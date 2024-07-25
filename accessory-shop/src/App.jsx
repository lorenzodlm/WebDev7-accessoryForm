
import { useState, useRef } from 'react'
import accessoryData from './accessory.json'
import DataTable from './components/DataTable'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [selectedItems, setSelectedItems] = useState([])
  const [filteredSelectedItems, setFilteredSelectedItems] = useState([])

  const quantityRef = useRef()
  const productRef = useRef()
  const [price, setPrice] = useState(accessoryData[0].price)

  const handleSubmit = (e) => {
    const productId = parseInt(productRef.current.value)
    const product = accessoryData.find(accessory => accessory.id === productId)
    const order = {
      ...product,
      quantity: quantityRef.current.value
    }
    console.table(order)
    setSelectedItems([...selectedItems, order]) 
    setFilteredSelectedItems([...selectedItems, order])

  }

  const deleteItemByIndex = (index) => {
    selectedItems.splice(index, 1)
    setSelectedItems([...selectedItems])
    setFilteredSelectedItems([...selectedItems])
  }

  const search = (keyword) => {
    setFilteredSelectedItems([
      ...selectedItems.filter(item => item.name.includes(keyword))
    ])
  }

  const updatePrice = (e) => {
    const productId = parseInt(e.target.value) 
    const product = accessoryData.find(accessory => accessory.id === productId)
    setPrice(product.price)
  }

  const sort = (direction) => {
    const sortedItems = selectedItems.sort((a, b) => {
      if (direction === 'asc') {
        return a.name.localeCompare(b.name)
      } else {
        return b.name.localeCompare(a.name)
      }
    })
    setFilteredSelectedItems([...sortedItems])
  }

  return (
    <>
      <Container>
        <Row>
          <Col xs={2}> Product: </Col>
          <Col xs={10}>
            <select ref={productRef} onChange={updatePrice}>
              {accessoryData.map((accessory, index) => (
                <option key={index} value={accessory.id}>{accessory.name}</option>
              ))}
            </select>
          </Col>
        </Row>
        <Row>
          <Col xs={2}> Price: </Col>
          <Col xs={10}> {price} </Col>
        </Row>
        <Row>
          <Col xs={2}> Quantity: </Col>
          <Col xs={10}><input type="number" ref={quantityRef} defaultValue={1} /> </Col>
        </Row>
        <Button variant="secondary" onClick={handleSubmit}>Add</Button>
      </Container>

      <Container>
        <DataTable data={filteredSelectedItems}
          onDelete={deleteItemByIndex} 
          onSearch={search} 
          onSort={sort}
          />
      </Container>
    </>
  )
}

export default App