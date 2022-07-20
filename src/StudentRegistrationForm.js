import React, { Component } from 'react'

export default class StudentRegistrationForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         f_name:"",
         l_name:"",
         dob:"",
         u_Gender:"",
         sibling_details:"",
         father_f_name:"",
         father_l_name:"",
         father_qualification:"",
         father_ocuupation:"",
         fathers_phone:"",
         fathers_mail:"",
         mother_f_name:"",
         mother_l_name:"",
         mother_qualification:"",
         mother_ocuupation:"",
         mother_phone:"",
         mother_mail:"",
         address:"",

         f_name_err:"",
         l_name_err:"",
         dob_err:"",
         u_Gender_err:"",
         sibling_details_err:"",
         father_f_name_err:"",
         father_l_name_err:"",
         father_qualification_err:"",
         father_ocuupation_err:"",
         fathers_phone_err:"",
         fathers_mail_err:"",
         mother_f_name_err:"",
         mother_l_name_err:"",
        //  mother_qualification_err:"",
        //  mother_ocuupation_err:"",
         mother_phone_err:"",
         mother_mail_err:"",
         address_err:"",
         flag:"",
      }
    }

    get_first_name = (event) => {
        this.setState({
            f_name:event.target.value,
        },this.firstname_error)
    }
    firstname_error = () => {
        console.log(this.state.f_name);
        var letters = /^[A-Za-z]+$/;
        if(this.state.f_name===""){
            this.setState({
                f_name_err:"",
                flag:0,
            })
        }
        else {if(letters.test(this.state.f_name)){
            console.log("valid");
            this.setState({
                f_name_err:"valid",
                flag:1,
            })
        }
        else{
            console.log("invalid");
            this.setState({
                f_name_err:"invalid",
                flag:0,
            })
        }}
    }

    get_last_name = (event) => {
        this.setState({
            l_name:event.target.value,
        },this.lastname_error)
    }

    lastname_error = () => {
        console.log(this.state.l_name);
        var letters = /^[A-Za-z]+$/;
        if(this.state.l_name===""){
            this.setState({
                l_name_err:"",
                flag:0,
            })
        }
        else{
            if(letters.test(this.state.l_name)){
                console.log("valid");
                this.setState({
                    l_name_err:"valid",
                    flag:1,
                })
            }
            else{
                console.log("invalid");
                this.setState({
                    l_name_err:"invalid",
                    flag:0,
                })
            }
        }
    }

    get_date_of_birth = (event) => {
        this.setState({
            dob:event.target.value,
        })
        console.log(this.state.dob);
    }

    get_gender = (event) => {
        this.setState({
            u_Gender:event.target.value,
        })
        console.log(this.state.u_Gender);
    }

    get_sibling_details= (event) => {
        this.setState({
            sibling_details:event.target.value,
        })
        console.log(this.state.sibling_details);
    }

    get_father_first_name = (event) => {
        this.setState({
            father_f_name:event.target.value,
        })
        console.log(this.state.father_f_name);
        var letters = /^[A-Za-z]+$/;
        if(letters.test(this.state.father_f_name)){
            console.log("valid");
            this.setState({
                father_f_name_err:"valid",
                flag:1,
            })
        }
        else{
            console.log("invalid");
            this.setState({
                father_f_name_err:"invalid",
                flag:0,
            })
        }

    }

    get_father_last_name = (event) => {
        this.setState({
            father_l_name:event.target.value,
        })
        console.log(this.state.father_l_name);
        var letters = /^[A-Za-z]+$/;
        if(letters.test(this.state.father_l_name)){
            console.log("valid");
            this.setState({
                father_l_name_err:"valid",
                flag:1,
            })
        }
        else{
            console.log("invalid");
            this.setState({
                father_l_name_err:"invalid",
                flag:0,
            })
        }
    }

    get_father_Qualification = (event) => {
        this.setState({
            father_qualification:event.target.value,
        })
        console.log(this.state.father_qualification);
    }

    get_father_Occupation = (event) => {
        this.setState({
            father_ocuupation:event.target.value,
        })
        console.log(this.state.father_ocuupation);

    }

    get_father_phone = (event) => {
        this.setState({
            fathers_phone:event.target.value,
        },this.fun_cal)
    }

    fun_cal = () => {
        console.log(this.state.fathers_phone); 
        console.log(this.state.fathers_phone.length);
        if(this.state.fathers_phone.length===10){
            if(/^[0-9]+$/.test(this.state.fathers_phone)){
                this.setState({
                    fathers_phone_err:"valid",
                    flag:1,
                })
            }
            else{
                this.setState({
                    fathers_phone_err:"invalid",
                    flag:0,
                })
            }
        }
        else{
            this.setState({
                fathers_phone_err:"invalid",
                flag:0,
            })
        }
    }

    get_father_email = (event) => {
        this.setState({
            fathers_mail:event.target.value,
        })
        console.log(this.state.fathers_mail);
        var reg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(reg.test(this.state.fathers_mail)){
            console.log("valid");
            this.setState({
                fathers_mail_err:"valid",
                flag:1,
            })
        }
        else{
            console.log("invalid");
            this.setState({
                fathers_mail_err:"invalid",
                flag:0,
            })
        }
    }

    get_mother_first_name = (event) => {
        this.setState({
            mother_f_name:event.target.value,
        })
        console.log(this.state.mother_f_name);
        var letters = /^[A-Za-z]+$/;
        if(letters.test(this.state.mother_f_name)){
            console.log("valid");
            this.setState({
                mother_f_name_err:"valid",
                flag:1,
            })
        }
        else{
            console.log("invalid");
            this.setState({
                mother_f_name_err:"invalid",
                flag:0,
            })
        }
    }

    get_mother_last_name = (event) => {
        this.setState({
            mother_l_name:event.target.value,
        })
        console.log(this.state.mother_l_name);
        var letters = /^[A-Za-z]+$/;
        if(letters.test(this.state.mother_l_name)){
            console.log("valid");
            this.setState({
                mother_l_name_err:"valid",
                flag:1,
            })
        }
        else{
            console.log("invalid");
            this.setState({
                mother_l_name_err:"invalid",
                flag:0,
            })
        }
    }

    get_mother_Qualification = (event) => {
        this.setState({
            mother_qualification:event.target.value,
        })
        console.log(this.state.mother_qualification);
    }

    get_mother_Occupation = (event) => {
        this.setState({
            mother_ocuupation:event.target.value,
        })
        console.log(this.state.mother_ocuupation);

    }

    get_mother_phone = (event) => {
        this.setState({
            mother_phone:event.target.value,
        },this.fun_cal_mother_phone)
        console.log(this.state.mother_phone); 
    }

    fun_cal_mother_phone = () => {
        if(this.state.mother_phone.length===10){
            if(/^[0-9]+$/.test(this.state.mother_phone)){
                this.setState({
                    mother_phone_err:"valid",
                    flag:1,
                })
            }
            else{
                this.setState({
                    mother_phone_err:"invalid",
                    flag:0,
                })
            }
        }
        else{
            this.setState({
                mother_phone_err:"invalid",
                flag:0,
            })
        }
    }

    get_mother_email = (event) => {
        this.setState({
            mother_mail:event.target.value,
        })
        console.log(this.state.mother_mail);
        var reg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(reg.test(this.state.mother_mail)){
            console.log("valid");
            this.setState({
                mother_mail_err:"valid",
                flag:1,
            })
        }
        else{
            console.log("invalid");
            this.setState({
                mother_mail_err:"invalid",
                flag:0,
            })
        }
    }

    get_address = (event) => {
        this.setState({
            address:event.target.value,
        })
        console.log(this.state.address);
    }

    submit_form = (event) => {
        event.preventDefault();
        if(this.state.flag){
            alert("form submit");
            this.resetForm();

        }
        else{
            alert("form not submmited")
        }
    }

    resetForm = () => {
        this.setState({
            f_name:"",
            l_name:"",
            dob:"",
            u_Gender:"",
            sibling_details:"",
            father_f_name:"",
            father_l_name:"",
            father_qualification:"",
            father_ocuupation:"",
            fathers_phone:"",
            fathers_mail:"",
            mother_f_name:"",
            mother_l_name:"",
            mother_qualification:"",
            mother_ocuupation:"",
            mother_phone:"",
            mother_mail:"",
            address:"",
   
            f_name_err:"",
            l_name_err:"",
            dob_err:"",
            u_Gender_err:"",
            sibling_details_err:"",
            father_f_name_err:"",
            father_l_name_err:"",
            father_qualification_err:"",
            father_ocuupation_err:"",
            fathers_phone_err:"",
            fathers_mail_err:"",
            mother_f_name_err:"",
            mother_l_name_err:"",
           //  mother_qualification_err:"",
           //  mother_ocuupation_err:"",
            mother_phone_err:"",
            mother_mail_err:"",
            address_err:"",
            flag:"",
        })
    }

  render() {
    return (
      <div className='main_container'>
          <form onSubmit={this.submit_form} >
          <div className='container_div'>
          <p className='text' style={{fontSize:"4vw",fontWeight:"lighter"}}>Student Registration Form</p>
          <p className='text'>Name of the Applicant</p>
          <div className='flex_container'>
                <div className='halfBlocks'><input placeholder='first' required value={this.state.f_name} onChange={this.get_first_name}/></div>
                <div className='halfBlocks'><input placeholder='last' required value={this.state.l_name} onChange={this.get_last_name}/></div>
          </div>
          <div className='flex_container'>
                <div className='halfBlocks'><input value={this.state.f_name_err} disabled  style={{border:"none",color:"red",fontSize:"1vw"}} /></div>
                <div className='halfBlocks'><input value={this.state.l_name_err} disabled  style={{border:"none",color:"red",fontSize:"1vw"}}/></div>
          </div>
           
            <p className='text'>Date of Birth</p>
            <div className='fullBlocks'><input type="date" required value={this.state.dob} onChange={this.get_date_of_birth}></input></div>

            <p className='text'>Gender</p>
            <div className='text'>
                <input type="radio" id="" name="gender" value="Male"  required />
                <label for="">Male</label><br/>
                <input type="radio" id="" name="gender" value="Female" required />
                <label for="">Female</label>
            </div>

            <p className='text'>Details of Siblings</p>
            <div className='fullBlocks1'><textarea required value={this.state.sibling_details} onChange={this.get_sibling_details}></textarea></div>


            <p className='text' style={{fontSize:"2vw",fontWeight:"lighter"}}>Parents Information</p>
            <p className='text'>Father's Name</p>
            <div className='flex_container'>
                <div className='halfBlocks'><input placeholder='first' required value={this.state.father_f_name} onChange={this.get_father_first_name}/></div>
                <div className='halfBlocks'><input placeholder='last' required value={this.state.father_l_name} onChange={this.get_father_last_name}/></div>
            </div>

            {/* error validation */}
            <div className='flex_container'>
                <div className='halfBlocks'><input value={this.state.father_f_name_err} disabled  style={{border:"none",color:"red",fontSize:"1vw"}} /></div>
                <div className='halfBlocks'><input value={this.state.father_l_name_err} disabled  style={{border:"none",color:"red",fontSize:"1vw"}}/></div>
            </div>

            <p className='text'>Fathers Qualification</p>
            <div className='fullBlocks'><input required value={this.state.father_qualification} onChange={this.get_father_Qualification}></input></div>

            <p className='text'>Fathers Occupation</p>
            <div className='fullBlocks'><input required value={this.state.father_ocuupation} onChange={this.get_father_Occupation}></input></div>

            <p className='text'></p>
            <div className='flex_container'>
                <div className='halfBlocks'><input value="Phone" disabled  style={{border:"none",color:"black"}}/></div>
                <div className='halfBlocks'><input value="Email" disabled  style={{border:"none",color:"black"}}/></div>
            </div>
            <div className='flex_container'>
                <div className='halfBlocks'><input placeholder='### ### ####' required value={this.state.fathers_phone} onChange={this.get_father_phone}/></div>
                <div className='halfBlocks'><input required value={this.state.fathers_mail} onChange={this.get_father_email}/></div>
            </div>
            <div className='flex_container'>
                <div className='halfBlocks'><input value={this.state.fathers_phone_err} disabled  style={{border:"none",color:"red",fontSize:"1vw"}} /></div>
                <div className='halfBlocks'><input value={this.state.fathers_mail_err} disabled  style={{border:"none",color:"red",fontSize:"1vw"}}/></div>
            </div>


            <p className='text'>Mother's Name</p>
            <div className='flex_container'>
                <div className='halfBlocks'><input placeholder='first' required value={this.state.mother_f_name} onChange={this.get_mother_first_name}/></div>
                <div className='halfBlocks'><input placeholder='last' required value={this.state.mother_l_name} onChange={this.get_mother_last_name}/></div>
            </div>
            <div className='flex_container'>
                <div className='halfBlocks'><input value={this.state.mother_f_name_err} disabled  style={{border:"none",color:"red",fontSize:"1vw"}} /></div>
                <div className='halfBlocks'><input value={this.state.mother_l_name_err} disabled  style={{border:"none",color:"red",fontSize:"1vw"}}/></div>
            </div>

            <p className='text'>Mothers Qualification</p>
            <div className='fullBlocks'><input required value={this.state.mother_qualification} onChange={this.get_mother_Qualification}></input></div>

            <p className='text'>Mothers Occupation</p>
            <div className='fullBlocks'><input required value={this.state.mother_ocuupation} onChange={this.get_mother_Occupation}></input></div>

            <p className='text'></p>
            <div className='flex_container'>
                <div className='halfBlocks'><input disabled value="Phone" required style={{border:"none",color:"black"}}/></div>
                <div className='halfBlocks'><input type="email" disabled value="Email" required style={{border:"none",color:"black"}}/></div>
            </div>
            <div className='flex_container'>
                <div className='halfBlocks'><input placeholder='### ### ####' required value={this.state.mother_phone} onChange={this.get_mother_phone}/></div>
                <div className='halfBlocks'><input placeholder='' required value={this.state.mother_mail} onChange={this.get_mother_email} /></div>
            </div>
            <div className='flex_container'>
                <div className='halfBlocks'><input disabled value={this.state.mother_phone_err} required style={{border:"none",color:"red"}}/></div>
                <div className='halfBlocks'><input type="email" disabled value={this.state.mother_mail_err} required style={{border:"none",color:"red"}}/></div>
            </div>

            <p className='text'>Address</p>
            <div className='fullBlocks'><input placeholder='Street Address' required value={this.state.address} onChange={this.get_address} /></div>
            <p className='text'></p>
            <div className='fullBlocks' style={{width:"10vw",margin:"auto"}}><input type="submit"/></div>
          </div>
          </form>

      </div>
    )
  }
}
