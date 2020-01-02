module ApplicationHelper

  def embedded_svg filename, options={}
   file = File.read(Rails.root.join('app', 'assets', 'images', filename))
   doc = Nokogiri::HTML::DocumentFragment.parse file
   svg = doc.at_css 'svg'
   if options[:class].present?
     svg['class'] = options[:class]
   end
   doc.to_html.html_safe
 end

  def navbar_button_color(navbar_mode)
    if navbar_mode == 'black'
      "text-white bg-black hover:bg-gray-800"
    elsif navbar_mode == 'white'
      "text-white bg-black hover:bg-gray-800"
    elsif navbar_mode == 'color'
      "text-white bg-blue hover:bg-blue-light"
    end
  end

end
