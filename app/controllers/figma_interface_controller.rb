class FigmaInterfaceController < ApplicationController
  def index
    @modules = FigmaModule.all
  end

  def show
    @module = FigmaModule.find(params[:id])
    @sub_modules = @module.figma_sub_modules
  end

  def create_module
    @module = FigmaModule.new(module_params)
    if @module.save
      redirect_to figma_interface_index_path, notice: l(:msg_module_created)
    else
      render :index, alert: l(:error_module_create_failed)
    end
  end

  def create_sub_module
    @module = FigmaModule.find(params[:id])
    @sub_module = @module.figma_sub_modules.new(sub_module_params)
    if @sub_module.save
      redirect_to figma_interface_show_path(@module), notice: l(:msg_sub_module_created)
    else
      render :show, alert: l(:error_sub_module_create_failed)
    end
  end

  private

  def module_params
    params.require(:figma_module).permit(:name)
  end

  def sub_module_params
    params.require(:figma_sub_module).permit(:name)
  end
end
