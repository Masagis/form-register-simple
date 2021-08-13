import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

function Form() {
  return (
    <React.Fragment>
      <div className='line-header' />
      <div className='container'>
        <div className='row'>
          <form action=''>
            <div className='col-md-12 mb-2'>
              <img
                src='/logo.png'
                alt='logo'
                className='img-fluid img-center mt-5 mb-4'
                width='250px'
                height='80px'
              />
              <div className='info-line text-center'>
                You don't have an account yet. please create a new account
              </div>
            </div>

            <div className='col-md-12 mb-2'>
              <h4>Create new account</h4>
              <label className='mt-3'>Title</label>
              <br />
              <div className=''>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='inlineCheckbox1'
                    value='option1'
                  />
                  <label className='form-check-label'>Mrs</label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='inlineCheckbox2'
                    value='option2'
                  />
                  <label className='form-check-label'>Ms</label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='inlineCheckbox3'
                    value='option3'
                  />
                  <label className='form-check-label'>Mdm</label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='inlineCheckbox3'
                    value='option3'
                  />
                  <label className='form-check-label'>Mr</label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='inlineCheckbox3'
                    value='option3'
                  />
                  <label className='form-check-label'>Dr</label>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 mb-2'>
                  <FormGroup>
                    <Label>Last name *</Label>
                    <Input
                      type='text'
                      name='lastName'
                      id='lastName'
                      placeholder='Last name'
                    />
                  </FormGroup>
                </div>
                <div className='col-md-6'>
                  <FormGroup>
                    <Label>First Name*</Label>
                    <Input
                      type='email'
                      name='email'
                      id='exampleEmail'
                      placeholder='First name'
                    />
                  </FormGroup>
                </div>
                <div className='col-md-6'>
                  <label className='mt-2'>Mobile phone number *</label>
                  <div className='row'>
                    <div className='col-2 col-sm-2 col-md-2'>
                      <Input type='text' />
                    </div>
                    <div className='col-10 col-sm-10 col-md-10'>
                      <div className='input-group mb-3'>
                        <span className='input-group-text'>@</span>
                        <Input
                          type='text'
                          name='phoneNumber'
                          id='phoneNumber'
                          placeholder='Mobile phone number'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-12 mt-4 mb-2'>
              <h4>Address</h4>
              <FormGroup>
                <Label className='mt-3'>Address* </Label>
                <Input
                  type='text'
                  name='address'
                  id='address'
                  placeholder='Address'
                />
              </FormGroup>
              <div className='row mt-2'>
                <div className='col-md-6 mb-2'>
                  <FormGroup>
                    <Label>Country/Location*</Label>
                    <Input
                      type='text'
                      name='country'
                      id='country'
                      placeholder='Select Country/Location'
                    />
                  </FormGroup>
                </div>
                <div className='col-md-6'>
                  <FormGroup>
                    <Label>Province/District *</Label>
                    <Input
                      type='text'
                      name='province'
                      id='province'
                      placeholder='Select Province/District'
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className='col-md-12 mt-4 mb-3'>
              <h4>Contact</h4>
              <div className='row'>
                <div className='col-md-6 mt-3 mb-2'>
                  <FormGroup>
                    <Label>Email Address*</Label>
                    <Input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='Email Address'
                    />
                  </FormGroup>
                </div>
                <div className='col-md-6'>
                  <div className='row'>
                    <div className='col-md-4 mb-2'>
                      <FormGroup>
                        <Label>Date of birth*</Label>
                        <Input type='' name='day' id='day' placeholder='DD' />
                      </FormGroup>
                    </div>
                    <div className='col-md-4 mb-2'>
                      <FormGroup>
                        <Label>Month*</Label>
                        <Input
                          type=''
                          name='month'
                          id='month'
                          placeholder='Month'
                        />
                      </FormGroup>
                    </div>
                    <div className='col-md-4'>
                      <FormGroup>
                        <Label>Year</Label>
                        <Input
                          type=''
                          name='year'
                          id='year'
                          placeholder='Year'
                        />
                      </FormGroup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-12 mt-4 mb-3'>
              <h2>Standar Privacy Note</h2>
              <p>
                <em>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium quisquam doloremque natus, delectus non ut ad
                  recusandae iste itaque consectetur! Quidem itaque quisquam
                  praesentium dolores, nostrum natus iste mollitia suscipit?
                </em>
              </p>
              <p>
                <em>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                  facere optio corporis commodi esse hic placeat ea, aliquid
                  illo, aliquam ducimus molestiae exercitationem, accusamus
                  tempore asperiores cumque inventore voluptatum fugiat!
                </em>
              </p>
              <p>
                <em>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus architecto molestiae nobis magnam non neque corporis
                  expedita sunt nisi voluptatem, sequi quidem tempore
                  perspiciatis, nulla quaerat quisquam ipsam ad dolorum.
                </em>
              </p>
              <p>
                <em>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugit officiis ea id assumenda adipisci quia dolor aliquid
                  consectetur maxime sunt mollitia, magnam, consequuntur rerum,
                  facere voluptate impedit placeat ab magni.
                </em>
              </p>
              <p>
                <em>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Expedita architecto omnis debitis saepe. Ullam, magnam illum
                  commodi aliquam cum cumque possimus, unde distinctio quidem
                  ipsam eveniet eaque, consectetur neque porro?
                </em>
              </p>
              <p>
                <em>
                  I want to receive information or communication from L'OCCITANE
                </em>
              </p>
              <div className='row'>
                <div className='col-md-4'>
                  <div className='form-check form-switch'>
                    <label className='form-check-label'>
                      SMS & Mobile Call
                    </label>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='flexSwitchCheckDefault'
                    />
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='form-check form-switch'>
                    <label className='form-check-label'>Emailing</label>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='flexSwitchCheckDefault'
                    />
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='form-check form-switch'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='flexSwitchCheckDefault'
                    />
                    <label className='form-check-label'>Mailing</label>
                  </div>
                </div>
                <div className='col-md-12 mt-4'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckDefault'
                    />
                    <label className='form-check-label'>
                      <em>
                        I have read and understood the above terms and
                        conditions and and hereby agree that I will be bounded
                        by these conditions and policies once I have submitted
                        this application form.
                      </em>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button className='mt-4 mb-5 btn btn-warning float-end'>
              Create Customers
            </button>
          </form>
          <h3 className='text-center'>v1.0.7</h3>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Form
