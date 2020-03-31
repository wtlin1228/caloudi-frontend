import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// utils

// assets

// actions
import { offerAsyncActions } from 'Offer'

// components
import { useRadioGroup, Table, Button, Modal, Card } from 'components'

// self-defined-components
const RadioGroupsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px;
`

const StyledButton = styled(Button)`
  margin-left: 0;
  width: 100%;
  margin-bottom: 20px;
`

const Offers = ({
  fetchOfferOptionsAsync,
  fetchOffersAsync,
  fetchOfferDetailAsync,
  offerOptions,
  offers,
  offerDetail
}) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedCategory, CategoryRadioGroup] = useRadioGroup(
    'category',
    'all',
    offerOptions.category
  )
  const [selectedCilling, BillingRadioGroup] = useRadioGroup(
    'billing',
    'all',
    offerOptions.billing
  )
  const [selectedCnitType, UnitTypeRadioGroup] = useRadioGroup(
    'unitType',
    'all',
    offerOptions.unitType
  )
  const [selectedCsAddOn, IsAddOnRadioGroup] = useRadioGroup(
    'isAddOn',
    'all',
    offerOptions.isAddOn
  )
  const [selectedCasAddOns, HasAddOnsRadioGroup] = useRadioGroup(
    'hasAddOns',
    'all',
    offerOptions.hasAddOns
  )
  const [selectedCountry, CountryRadioGroup] = useRadioGroup(
    'country',
    'all',
    offerOptions.country
  )

  useEffect(() => {
    const fields = [
      'category',
      'billing',
      'unitType',
      'isAddOn',
      'hasAddOns',
      'country'
    ]
    fields.forEach(item => fetchOfferOptionsAsync({ field: item }))
  }, [fetchOfferOptionsAsync])

  return (
    <div>
      <RadioGroupsContainer>
        <CategoryRadioGroup />
        <BillingRadioGroup />
        <UnitTypeRadioGroup />
        <IsAddOnRadioGroup />
        <HasAddOnsRadioGroup />
        <CountryRadioGroup />
      </RadioGroupsContainer>
      <StyledButton onClick={handleSearchClick}>Search Offers</StyledButton>

      <Table data={offers || []} onClick={handleShowModal} />

      {showModal ? (
        <Modal>
          <Card
            onClick={() => setShowModal(false)}
            offerName={offerDetail.offerName}
            description={offerDetail.description}
            country={offerDetail.country}
            term={offerDetail.term}
            syncTime={offerDetail.syncTim}
          />
        </Modal>
      ) : null}
    </div>
  )

  function handleSearchClick() {
    fetchOffersAsync({
      category: selectedCategory === 'all' ? '' : selectedCategory,
      billing: selectedCilling === 'all' ? '' : selectedCilling,
      unitType: selectedCnitType === 'all' ? '' : selectedCnitType,
      isAddOn: selectedCsAddOn === 'all' ? '' : selectedCsAddOn,
      hasAddOns: selectedCasAddOns === 'all' ? '' : selectedCasAddOns,
      country: selectedCountry === 'all' ? '' : selectedCountry
    })
  }

  function handleShowModal(offerId, country) {
    fetchOfferDetailAsync({ offerId, country })
    setShowModal(true)
  }
}

Offers.propTypes = {
  offerOptions: PropTypes.shape({}).isRequired,
  offers: PropTypes.array.isRequired,
  offerDetail: PropTypes.shape({}).isRequired,
  fetchOfferOptionsAsync: PropTypes.func.isRequired,
  fetchOffersAsync: PropTypes.func.isRequired,
  fetchOfferDetailAsync: PropTypes.func.isRequired
}

const mapStateToProps = ({ offer }) => ({
  offerOptions: offer.options,
  offers: offer.data,
  offerDetail: offer.detail
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchOfferOptionsAsync: offerAsyncActions.fetchOfferOptionsAsync,
      fetchOffersAsync: offerAsyncActions.fetchOffersAsync,
      fetchOfferDetailAsync: offerAsyncActions.fetchOfferDetailAsync
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Offers)
