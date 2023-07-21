import SectionHeader from '../../components/SectionHeader';

const Reviews = () => {
    return (
        <section className="max-w-screen-xl mx-auto ">
      
  <div className=" ">
  <SectionHeader header={'Student Reviews'} description={'Why choose us for next amazing skill'}/>
    <div className="grid lg:grid-cols-3 md:grid-cols-2  dark:text-white">
      <div className=" mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.freepik.com/free-photo/portrait-hispanic-college-student-carrying-backpack-standing-school-hallway_662251-1109.jpg?w=740&t=st=1686411328~exp=1686411928~hmac=b6a41d8e535490971dfe37ffcf30b70d843f3740b5ceeb42265c94ce1a87e1a9" />
          <p className="leading-relaxed">Supportive Environment: Students appreciate schools that provide a supportive and inclusive environment. This includes factors like approachable faculty, extracurricular activities, and opportunities for personal and social development..</p>
          <span className="inline-block h-1 w-10 rounded bg-[#89216B] mt-6 mb-4" />
          <h2 className=" font-medium title-font tracking-wider text-sm uppercase">Arman</h2>
          <p className="text-gray-500">6th Batch Student</p>
        </div>
      </div>
      <div className=" mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.freepik.com/free-photo/happy-student-with-graduation-hat-diploma-grey_231208-12979.jpg?w=1380&t=st=1686411373~exp=1686411973~hmac=1d588459cca151b7ba037f048ed79a5a35b2092d550247c3fc6dfcfccc18c111" />
          <p className="leading-relaxed">Communication and Support: Students appreciate clear and timely communication from school administration regarding policies, updates, and any changes that may affect their academic journey impact future career prospects.</p>
          <span className="inline-block h-1 w-10 rounded bg-[#89216B] mt-6 mb-4" />
          <h2 className=" font-medium title-font tracking-wider text-sm uppercase">Fariya</h2>
          <p className="text-gray-500">5th Batch Student</p>
        </div>
      </div>
      <div className=" p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.freepik.com/free-photo/smiling-handsome-man-standing-with-crossed-arms-isolated-gray-background_231208-14087.jpg?w=1380&t=st=1686411403~exp=1686412003~hmac=1048c2efd10a312844c31cdaf26808176c014f32fb1666d54a927a930de3b02f" />
          <p className="leading-relaxed">Facilities and Resources: The availability and quality of facilities and resources, such as libraries, laboratories, technology, and study spaces, play a role in student satisfaction and overall campus s when reviewing a school..</p>
          <span className="inline-block h-1 w-10 rounded bg-[#89216B] mt-6 mb-4" />
          <h2 className=" font-medium title-font tracking-wider text-sm uppercase">Nahid</h2>
          <p className="text-gray-500">7th Batch Student</p>
        </div>
      </div>
      <div className=" p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.freepik.com/free-photo/smiling-handsome-man-standing-with-crossed-arms-isolated-gray-background_231208-14087.jpg?w=1380&t=st=1686411403~exp=1686412003~hmac=1048c2efd10a312844c31cdaf26808176c014f32fb1666d54a927a930de3b02f" />
          <p className="leading-relaxed">Facilities and Resources: The availability and quality of facilities and resources, such as libraries, laboratories, technology, and study spaces, play a role in student satisfaction and overall campus s when reviewing a school..</p>
          <span className="inline-block h-1 w-10 rounded bg-[#89216B] mt-6 mb-4" />
          <h2 className=" font-medium title-font tracking-wider text-sm uppercase">Arif</h2>
          <p className="text-gray-500">7th Batch Student</p>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default Reviews;