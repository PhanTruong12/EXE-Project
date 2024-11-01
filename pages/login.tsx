import Layout from '../layouts/Main';
import Link from 'next/link';
import { useForm } from "react-hook-form";
//import { server } from '../utils/server'; 
import { useRouter } from 'next/router';
import { postData } from '../utils/services'; 

type LoginMail = {
  email: string;
  password: string;
}

const decodeToken = (token: string) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};


const LoginPage = () => {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data: LoginMail) => {
    try {
      const res = await postData('/auth/SignIn', {
        Email: data.email,
        Password: data.password,
      });
  
      if (res && res.token) {
        localStorage.setItem('jwtToken', res.token);

        const decodedToken = decodeToken(res.token);
        if (decodedToken) {
          const role = decodedToken.role;
          if (role) {
            localStorage.setItem('userRole', role);
          }
        }
  
        if (res.userInfo) {
          localStorage.setItem('userInfo', JSON.stringify(res.userInfo));
        }
  
        router.push('/');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };  
  

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <i className="icon-left"></i>Back to store
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">Log in</h2>
            
            
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  placeholder="email" 
                  type="text" 
                  name="email"
                  ref={register({
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                {errors.email && errors.email.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }

                {errors.email && errors.email.type === 'pattern' && 
                  <p className="message message--error">Please write a valid email</p>
                }
              </div>
              
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="password" 
                  placeholder="Password" 
                  name="password"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }
              </div>

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                    <input 
                      type="checkbox" 
                      name="keepSigned" 
                      id="check-signed-in" 
                      ref={register({ required: false })}
                    />
                    <span className="checkbox__check"></span>
                    <p>Keep me signed in</p>
                  </label>
                </div>
                <a href="/forgot-password" className="form__info__forgot-password">Forgot password?</a>
              </div>

              <div className="form__btns">
                <button type="button" className="btn-social fb-btn"><i className="icon-facebook"></i>Facebook</button>
                <button type="button" className="btn-social google-btn"><img src="/images/icons/gmail.svg" alt="gmail" /> Gmail</button>
              </div>

              <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Sign in</button>

              <p className="form__signup-link">Not a member yet? <a href="/register">Sign up</a></p>
            </form>
          </div>

        </div>
      </section>
    </Layout>
  );
}
  
export default LoginPage
  