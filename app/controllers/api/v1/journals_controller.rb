class Api::V1::JournalsController < ApplicationController
  before_action :set_journal, only: [:show,:update]

  def update
    @journal.update(journal_params)
    render json: @journal, status: 200
  end

  def show
    render json: @journal, status: 200
  end

  private

  def journal_params
    params.permit(:body)
  end

  def set_journal
    @journal = Journal.find(params[:id])
  end
end
