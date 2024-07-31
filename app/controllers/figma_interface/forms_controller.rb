class FormsController < ApplicationController
  def new
    @form = FigmaForm.new
  end

  def create
    @sub_module = FigmaSubModule.find(params[:figma_sub_module_id])
    @form = @sub_module.figma_forms.new(form_params)
    if @form.save
      redirect_to figma_interface_show_path(@sub_module.figma_module), notice: l(:msg_form_saved)
    else
      render :new, alert: l(:error_form_save_failed)
    end
  end

  private

  def form_params
    params.require(:figma_form).permit(:form_structure)
  end
end
