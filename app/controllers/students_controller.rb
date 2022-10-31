class StudentsController < ApplicationController

    skip_before_action :authorize, only: [:create]

    #GET /students
    def index
    students= Student.all
    render json: students
    end

    #GET /me 
    def show
        student = Student.find_by(id: session[:student_id])
        if student
            render json: student
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    #POST /signup
    def create
        student= Student.create!(student_params)
        if student.valid?
            # session[:student_id] = student.id
            render json: student, status: :created
        else
            render json: { errors: student.errors.full_messages }, status: :unprocessable_entity
        end
    end

    #DELETE /student/id
    def destroy
        student= Student.find(params[:id])
        student.destroy
        head :not_found
    end


    private

    def student_params
        params.permit(:firstname, :lastname, :email, :username, :password, :password_confirmation)
    end
    

end
