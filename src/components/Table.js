import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'

const defaultColumns = [
  { id: 'category', label: 'Category', minWidth: 130 },
  { id: 'billing', label: 'Billing', minWidth: 130 },
  {
    id: 'unitType',
    label: 'UnitType',
    minWidth: 170
  },
  {
    id: 'isAddOn',
    label: 'IsAddOn',
    minWidth: 100
  },
  {
    id: 'hasAddOns',
    label: 'HasAddOns',
    minWidth: 100
  },
  {
    id: 'country',
    label: 'Country',
    minWidth: 100
  }
]

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  container: {
    maxHeight: 440
  }
})

const MyTable = ({ data, columns = defaultColumns, onClick }) => {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(20)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const rows = data.map(row => createData(row))
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    onClick={() => onClick(row.id, row.country)}
                  >
                    {columns.map(column => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )

  function createData([
    offerId,
    country,
    offer,
    category,
    offerDescription,
    offerType,
    currency,
    chargeUnit,
    unitPrice,
    originalPrice,
    discount,
    term,
    minQTY,
    maxQTY,
    isAddOn,
    hasAddOns,
    billing,
    unit,
    syncTime
  ]) {
    return {
      id: offerId,
      category,
      billing,
      unitType: unit,
      isAddOn,
      hasAddOns,
      country
    }
  }
}

export default MyTable
