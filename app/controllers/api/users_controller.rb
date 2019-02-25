class Api::UsersController < ApplicationController
  def create
  end

  private
  def user_parmas 
    params.require(:user).permit(:username, :password)
  end
end
