class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      # redirect_to products_url
    else
      flash.now[:errors] = ["NO"]
      # render :new
    end
  end

  def destroy
    logout
    # redirect_to new_session_url
  end
  
end

